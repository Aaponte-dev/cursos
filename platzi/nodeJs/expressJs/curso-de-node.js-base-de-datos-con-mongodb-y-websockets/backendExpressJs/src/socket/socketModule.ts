import http from 'http';
import { Server } from 'socket.io';

let socket!: unknown;

class SocketModule {
	connect(server: http.Server) {
		socket = new Server(server);
	}

	returnSocket() {
		return socket as Server;
	}
}

export default SocketModule;
