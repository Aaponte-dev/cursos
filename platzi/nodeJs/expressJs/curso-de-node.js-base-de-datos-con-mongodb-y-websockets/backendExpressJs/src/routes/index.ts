import ChatRoute from './chatRoutes';
import MessageRoute from './messageRoutes';
import { Router } from 'express-serve-static-core';
import Routing from './createRouter';
import TestRoute from './testRoutes';
import UserRoute from './userRoutes';

class Route {
	static createRoutesOfProject(): Router {
		console.group('ROUTE:CREATE_ROUTES_OF_PROJECT');
		const messageRoutes = new MessageRoute();
		const userRoutes = new UserRoute();
		const chatRoutes = new ChatRoute();
		const routing = Routing.createRouting();
		routing.use('/chat', chatRoutes.createRotes());
		routing.use('/message', messageRoutes.createRotes());
		routing.use('/user', userRoutes.createRotes());
		routing.use('/test', TestRoute.createRotes());
		console.groupEnd();
		return routing;
	}
}
export default Route;
