import { Request, Response, NextFunction } from 'express';

/**
 * Middleware for handling unrecognized routes
 * returns status 404 and message
 */
const routeNotFoundException = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    status: 'fail',
    message: `Could find path ${req.originalUrl}`,
  });

  next();
};

export default routeNotFoundException;
