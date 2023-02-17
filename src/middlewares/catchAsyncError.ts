import { Request, Response, NextFunction } from 'express';

/**
 * catchAsyncError: Wrapper around async functions for
 * catching async errors and propagate to next
 */
type FnType = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const catchAsyncError = (fn: FnType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: any) => next(error));
  };
};

export default catchAsyncError;
