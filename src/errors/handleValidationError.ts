import mongoose from 'mongoose';
import { TErrorResponse } from '../interface/errorResponse';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): TErrorResponse => {
  const errorSources = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: errorSources[0]?.message,
    error: error.errors,
  };
};

export default handleValidationError;
