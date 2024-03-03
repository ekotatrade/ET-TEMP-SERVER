/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

import config from '../config';
import handleValidationError from '../errors/handleValidationError';
import { handleZodValidationError } from '../errors/handleZodValidationError';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let error;
  console.log(err);
  // handle errors
  if (err instanceof ZodError) {
    const handleError = handleZodValidationError(err);
    statusCode = handleError.statusCode;
    message = handleError.message;
    error = handleError.error;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = simplifiedError?.error;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    error,
    stack: config.node_env === 'development' ? error?.stack : '',
  });
};
