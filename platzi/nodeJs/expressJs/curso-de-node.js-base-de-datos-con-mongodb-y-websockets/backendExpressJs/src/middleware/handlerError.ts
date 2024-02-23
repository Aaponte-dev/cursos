import { NextFunction, Request, Response } from 'express';
import { Boom } from '@hapi/boom';

class HandlerError {
	logErrors(
		error: Error,
		_request: Request,
		_response: Response,
		next: NextFunction,
	) {
		console.group('HANDLE_ERROR:LOG_ERROR');
		console.error(error);
		console.groupEnd();
		next(error);
	}

	boomErrorHandler(
		error: unknown,
		_request: Request,
		_response: Response,
		_next: NextFunction,
	) {
		console.group('HANDLE_ERROR:BOOM_ERROR');
		console.groupEnd();
		if (error instanceof Boom) {
			const { output } = error;
			_response.status(output.statusCode).json(output.payload);
		} else if (error instanceof Error) _next(error);
	}

	errorHandler(
		error: Error,
		_request: Request,
		_response: Response,
		next: NextFunction,
	) {
		console.group('HANDLE_ERROR:ERROR_HANDLER');
		const errorMessage = 'Unprocessed error, check the logs';
		console.groupEnd();
		next(
			_response.status(500).json({
				message: error.message || errorMessage,
				stack: error.stack,
			}),
		);
	}
}

export default HandlerError;
