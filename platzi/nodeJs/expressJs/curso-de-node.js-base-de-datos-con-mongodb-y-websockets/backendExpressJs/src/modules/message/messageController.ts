import MessageInterface from '../../interfaces/messageInterface';
import { MessageService } from './messageService';

class MessageController {
	private messageService: MessageService;

	constructor() {
		console.group('MESSAGE_CONTROLLER:CONSTRUCTOR');
		this.messageService = new MessageService();
		console.groupEnd();
	}

	async create(massage: MessageInterface): Promise<unknown> {
		console.group('MESSAGE_CONTROLLER:CREATE');
		await this.messageService.create(massage);
		const response = { message: 'message.create' };
		console.groupEnd();
		return response;
	}

	async find(user: string): Promise<MessageInterface[] | []> {
		console.group('MESSAGE_CONTROLLER:FIND');
		const response = await this.messageService.find(user);
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<MessageInterface> {
		console.group('MESSAGE_CONTROLLER:FIND_BY_ID');
		const response = await this.messageService.findById(id);
		console.groupEnd();
		return response;
	}

	async update(id: string, body: MessageInterface) {
		console.group('MESSAGE_CONTROLLER:UPDATE');
		await this.messageService.update(id, body);
		const response = { message: 'message.update' };
		console.groupEnd();
		return response;
	}

	async delete(id: string) {
		console.group('MESSAGE_CONTROLLER:DELETE');
		await this.messageService.delete(id);
		const response = { message: 'message.delete' };
		console.groupEnd();
		return response;
	}
}

export default MessageController;
