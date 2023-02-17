/**
 * Utility class for composing application errors
 *
 * Example of usage
 *
 * let error = new CustomError('Not found message', 404); // { "status": "fail","message": "Not found message"}
 * error = new CustomError('Not found message', 500); // { "status": "error","message": "Not found message"}
 * error = new CustomError('Something bad happened'); // { "status": "error","message": "Something bad happened"}
 */

export default class CustomError extends Error {
  // flag for checking error type i.e operational (predictable errors)
  // or programming
  public isOperational: boolean = true;

  public status: string; // 'fail' | 'error' TODO: move to enum type

  public statusCode: number;

  constructor(message: string, statusCode?: number) {
    super(message);

    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.statusCode = statusCode || 500;
  }
}
