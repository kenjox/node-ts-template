import 'dotenv/config';
import config from 'config';
import { Request, Response, NextFunction } from 'express';

/**
 * globalErrorHandler: Global error handler middleware
 * Catches both operational and programming error thrown in the app
 */

const globalErrorHandler = (
  error: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error?.statusCode || 500;
  error.status = error?.status || 'error';

  // Check mode to determine which errors to display.
  // Goal is to prevent leaking more details while in production

  if (config.get<string>('mode.NODE_ENV') === 'development') {
    res.status(error?.statusCode).json({
      status: error?.status,
      error,
      message: error?.message,
      stack: error?.stack,
    });
  } else {
    // Check if error is operational (trusted)

    if (error.isOperational) {
      res.status(error?.statusCode).json({
        status: error?.status,
        message: error?.message,
      });
    } else {
      // TODO: add customized production logger e.g winston, pino etc
      console.error(error);

      // Generic message and 500 status code
      res.status(error?.statusCode).json({
        status: 500,
        message: 'Whooooops something went wrong. Try again later',
      });
    }
  }
  next();
};

export default globalErrorHandler;
