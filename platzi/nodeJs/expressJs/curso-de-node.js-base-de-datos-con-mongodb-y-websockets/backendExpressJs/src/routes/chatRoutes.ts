import {
	NextFunction,
	Request,
	Response,
	Router,
} from 'express-serve-static-core';

import ChatController from '../modules/chat/chatController';
import chatSchema from '../schemas/chatSchema';
import { ResponseModule } from '../modules/response/responseModule';
import Routing from './createRouter';
import validationMiddleware from '../middleware/validationMiddleware';

class ChatRoute {
	private readonly chatController: ChatController;

	private readonly route;

	constructor() {
		console.group('CHAT_ROUTE:CONSTRUCTOR');
		this.chatController = new ChatController();
		this.route = Routing.createRouting();
		console.groupEnd();
	}

	createRotes(): Router {
		console.group('CHAT_ROUTE:CREATE_ROUTES');

		this.route.get(
			'/',
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					ResponseModule.success(_response, await this.chatController.find());
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.post(
			'/',
			validationMiddleware(chatSchema),
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					ResponseModule.success(
						_response,
						await this.chatController.create(_request.body),
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
						await this.chatController.findById(id || ''),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.put(
			'/:id',
			validationMiddleware(chatSchema),
			async (_request: Request, _response: Response) => {
				const { id } = _request.params;
				const body = _request.body;
				ResponseModule.success(
					_response,
					await this.chatController.update(id || '', body),
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
						await this.chatController.delete(id || ''),
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

export default ChatRoute;
