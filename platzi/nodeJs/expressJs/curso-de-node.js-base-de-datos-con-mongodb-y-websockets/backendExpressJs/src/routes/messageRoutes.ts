import {
	messageInformationSchema,
	messageUpdateInformationSchema,
} from '../schemas/messageSchema';
import {
	NextFunction,
	Request,
	Response,
	Router,
} from 'express-serve-static-core';

import MessageController from '../modules/message/messageController';
import MulterModule from '../modules/multer/multerModule';
import { ResponseModule } from '../modules/response/responseModule';
import Routing from './createRouter';
import validationMiddleware from '../middleware/validationMiddleware';

class MessageRoute {
	private readonly messageController: MessageController;

	private readonly route;

	private readonly uploadFiles;

	constructor() {
		console.group('MESSAGE_ROUTE:CONSTRUCTOR');
		this.messageController = new MessageController();
		this.route = Routing.createRouting();
		this.uploadFiles = new MulterModule(`${__dirname}/../../uploads`).build();
		console.groupEnd();
	}

	createRotes(): Router {
		console.group('MESSAGE_ROUTE:CREATE_ROUTES');

		this.route.get(
			'/',
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					const { name } = _request.query;
					let query = '';
					if (typeof name === 'string') query = name;
					ResponseModule.success(
						_response,
						await this.messageController.find(query),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.post(
			'/',
			validationMiddleware(messageInformationSchema),
			this.uploadFiles.single('file'),
			async (_request: Request, _response: Response, next: NextFunction) => {
				try {
					ResponseModule.success(
						_response,
						await this.messageController.create(_request.body),
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
						await this.messageController.findById(id || ''),
					);
				} catch (error) {
					next(error);
				}
			},
		);

		this.route.put(
			'/:id',
			validationMiddleware(messageUpdateInformationSchema),
			async (_request: Request, _response: Response) => {
				const { id } = _request.params;
				const body = _request.body;
				ResponseModule.success(
					_response,
					await this.messageController.update(id || '', body),
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
						await this.messageController.delete(id || ''),
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

export default MessageRoute;
