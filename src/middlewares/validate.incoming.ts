import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validateSchema = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      return res.status(400).json({
        status: 'fail',
        error,
      });
    }
  };
};

export default validateSchema;
