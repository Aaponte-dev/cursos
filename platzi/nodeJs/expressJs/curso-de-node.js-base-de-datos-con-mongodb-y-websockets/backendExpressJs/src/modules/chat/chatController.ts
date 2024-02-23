import ChatInterface from '../../interfaces/chatInterface';
import { ChatService } from './chatService';

class ChatController {
	private chatService: ChatService;

	constructor() {
		console.group('CHAT_CONTROLLER:CONSTRUCTOR');
		this.chatService = new ChatService();
		console.groupEnd();
	}

	async create(usersIds: ChatInterface): Promise<unknown> {
		console.group('CHAT_CONTROLLER:CREATE');
		await this.chatService.create(usersIds);
		const response = { message: 'chat.create' };
		console.groupEnd();
		return response;
	}

	async find(): Promise<ChatInterface[] | []> {
		console.group('CHAT_CONTROLLER:FIND');
		const response = await this.chatService.find();
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<ChatInterface> {
		console.group('CHAT_CONTROLLER:FIND_BY_ID');
		const response = await this.chatService.findById(id);
		console.groupEnd();
		return response;
	}

	async update(id: string, usersIds: ChatInterface) {
		console.group('CHAT_CONTROLLER:UPDATE');
		await this.chatService.update(id, usersIds);
		const response = { message: 'chat.update' };
		console.groupEnd();
		return response;
	}

	async delete(id: string) {
		console.group('CHAT_CONTROLLER:DELETE');
		await this.chatService.delete(id);
		const response = { message: 'chat.delete' };
		console.groupEnd();
		return response;
	}
}

export default ChatController;
