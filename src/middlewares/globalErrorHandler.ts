import { Request, Response, NextFunction } from 'express';

/**
 * globalErrorHandler: Global error handler middleware
 * Catches both operational and programming error thrown in the app
 */

interface ErrorType {
  statusCode: number;
  status: string;
  message: string;
}

const globalErrorHandler = (
  error: ErrorType,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  error.statusCode = error?.statusCode || 500;
  error.status = error?.status || 'error';
  error.message = error?.message || 'Something went wrong. Try again later';

  res
    .status(error?.statusCode)
    .json({ status: error?.status, message: error?.message });
  next();
};

export default globalErrorHandler;
