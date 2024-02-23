import Router from 'express';
import { Router as RouterResponse } from 'express-serve-static-core';

class Routing {
	static createRouting(): RouterResponse {
		console.group('ROUTING:CREATE_ROUTING');
		// eslint-disable-next-line new-cap
		const router = Router();
		console.groupEnd();
		return router;
	}
}

export default Routing;
