import { NextFunction, Response } from 'express-serve-static-core';
import { badRequest } from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';

export class ResponseModule {
	static success(
		response: Response,
		message: unknown,
		status: number = StatusCodes.OK,
	) {
		console.group('RESPONSE_MODULE:SUCCESS');
		response.status(status).json({
			body: message,
		});
		console.groupEnd();
	}

	static error(next: NextFunction, message: string, details: string) {
		console.group('RESPONSE_MODULE:ERROR');
		console.error(details);
		next(badRequest(message));
		console.groupEnd();
	}
}
