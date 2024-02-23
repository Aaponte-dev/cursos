import MessageInterface from '../../interfaces/messageInterface';
import MessageModel from '../../entities/message';
import SocketModule from '../../socket/socketModule';

export class MessageService {
	private readonly messageModel;

	private readonly socketModule: SocketModule;

	constructor() {
		console.group('MESSAGE_SERVICE:CONSTRUCTOR');
		this.messageModel = MessageModel;
		this.socketModule = new SocketModule();
		console.groupEnd();
	}

	async create(message: MessageInterface): Promise<void> {
		console.group('MESSAGE_SERVICE:CREATE');
		const result = await this.messageModel.create(message);
		const socket = this.socketModule.returnSocket();
		socket.emit('message', result);
		console.groupEnd();
	}

	async find(user: string): Promise<MessageInterface[]> {
		console.group('MESSAGE_SERVICE:FIND');
		let query = {};
		if (user) query = { user };
		const response = await this.messageModel.find<MessageInterface>(query, '', {
			populate: 'user',
		});
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<MessageInterface> {
		console.group('MESSAGE_SERVICE:FIND_BY_ID');
		const response = await this.messageModel.findById(id, '', {
			populate: 'user',
		});
		if (!response)
			throw new Error(`message not found with the following ID: ${id}`);
		console.groupEnd();
		return response;
	}

	async update(id: string, body: MessageInterface) {
		console.group('MESSAGE_SERVICE:UPDATE');
		let response;
		if (await this.findById(id))
			response = await this.messageModel.findByIdAndUpdate(id, body, {
				new: true,
			});
		console.groupEnd();
		return response;
	}

	async delete(id: string) {
		console.group('MESSAGE_SERVICE:DELETE');
		const response = await this.messageModel.deleteOne({ _id: id });
		console.groupEnd();
		return response;
	}
}
