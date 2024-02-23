import {
	NextFunction,
	Request,
	Response,
	Router,
} from 'express-serve-static-core';

import { ResponseModule } from '../modules/response/responseModule';
import Routing from './createRouter';
import UserController from '../modules/user/userController';
import userSchema from '../schemas/userSchema';
import validationMiddleware from '../middleware/validationMiddleware';

class UserRoute {
	private readonly userController: UserController;

	private readonly route;

	constructor() {
		console.group('USER_ROUTE:CONSTRUCTOR');
		this.userController = new UserController();
		this.route = Routing.createRouting();
		console.groupEnd();
	}

	createRotes(): Router {
		console.group('USER_ROUTE:CREATE_ROUTES');

		this.route.get(
			'/',
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					const { name } = _request.query;
					let query = '';
					if (typeof name === 'string') query = name;
					ResponseModule.success(
						_response,
						await this.userController.find(query),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.post(
			'/',
			validationMiddleware(userSchema),
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					ResponseModule.success(
						_response,
						await this.userController.create(_request.body),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.get(
			'/:id',
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					const { id } = _request.params;
					ResponseModule.success(
						_response,
						await this.userController.findById(id || ''),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.put(
			'/:id',
			validationMiddleware(userSchema),
			async (_request: Request, _response: Response) => {
				const { id } = _request.params;
				const body = _request.body;
				ResponseModule.success(
					_response,
					await this.userController.update(id || '', body),
				);
			},
		);

		this.route.delete(
			'/:id',
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					const { id } = _request.params;
					ResponseModule.success(
						_response,
						await this.userController.delete(id || ''),
					);
				} catch (error) {
					next(error);
				}
			},
		);
		console.groupEnd();
		return this.route;
	}
}

export default UserRoute;
