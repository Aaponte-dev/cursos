import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import EnvironmentVariables from './config/environmentVariables';
import HandlerError from './middleware/handlerError';
import helmet from 'helmet';
import http from 'http';

import MongooseModule from './modules/mongoose/mongooseModule';
import Route from './routes';
import SocketModule from './socket/socketModule';

class Server {
	private readonly app: Application;

	private readonly server: http.Server;

	private readonly port: number;

	constructor() {
		// Deepcode ignore UseCsurfForExpress: <Simple API without the implementation of sessions or cookies>
		this.app = express();
		this.server = new http.Server(this.app);
		this.port = this.getPort();
		this.startServer();
	}

	private getPort(): number {
		console.group('SERVER:GET_PORT');
		const environment = new EnvironmentVariables();
		const projectEnvironment = environment.getValues();
		const { port } = projectEnvironment.project;
		console.groupEnd();
		return port;
	}

	private async startServer() {
		console.group('SERVER:START_SERVER');
		this.loadMiddleware();
		this.loadSocket();
		this.loadRoute();
		this.loadCors();
		await this.connectDb();
		this.listenPort();
		console.groupEnd();
	}

	private loadMiddleware() {
		console.group('SERVER:LOAD_MIDDLEWARE');
		this.app.use(express.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.disable('x-powered-by');
		this.app.use(helmet());
		console.groupEnd();
	}

	private loadSocket() {
		console.group('SERVER:LOAD_SOCKET');
		const socket = new SocketModule();
		socket.connect(this.server);
		console.groupEnd();
	}

	private loadRoute() {
		console.group('SERVER:LOAD_ROUTE');
		this.app.use(Route.createRoutesOfProject());
		const { logErrors, boomErrorHandler, errorHandler } = new HandlerError();
		this.app.use(logErrors);
		this.app.use(boomErrorHandler);
		this.app.use(errorHandler);
		console.groupEnd();
	}

	private loadCors() {
		console.group('SERVER:GET_PORT');
		this.app.use(cors());
		console.groupEnd();
	}

	private async connectDb() {
		console.group('SERVER:CONNECT_DB');
		await MongooseModule.connect();
		console.log('Database connected!');
		console.groupEnd();
	}

	listenPort() {
		console.group('SERVER:LISTEN_PORT');
		this.server
			.listen(this.port, () =>
				console.debug(`Server running in port ${this.port}`),
			)
			.on('error', (error) => {
				console.error(error);
			});
		console.groupEnd();
	}
}

new Server();
