import { Request, Response, Router } from 'express-serve-static-core';
import { ResponseModule } from '../modules/response/responseModule';
import Routing from './createRouter';
import TestController from '../modules/test/testController';

class TestRoute {
	static createRotes(): Router {
		console.group('TEST_ROUTE:CREATE_ROUTES');
		const route = Routing.createRouting();
		route.get('/', (_request: Request, _response: Response) =>
			ResponseModule.success(_response, TestController.find()),
		);
		route.post('/', (_request: Request, _response: Response) =>
			ResponseModule.success(_response, TestController.create()),
		);
		route.put('/', (_request: Request, _response: Response) =>
			ResponseModule.success(_response, TestController.update()),
		);
		route.delete('/', (_request: Request, _response: Response) =>
			ResponseModule.success(_response, TestController.delete()),
		);
		console.groupEnd();
		return route;
	}
}

export default TestRoute;
