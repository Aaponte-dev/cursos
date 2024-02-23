import ChatInterface from '../../interfaces/chatInterface';
import ChatModel from '../../entities/chat';

export class ChatService {
	private readonly chatModel;

	constructor() {
		console.group('CHAT_SERVICE:CONSTRUCTOR');
		this.chatModel = ChatModel;
		console.groupEnd();
	}

	async create(message: ChatInterface): Promise<void> {
		console.group('CHAT_SERVICE:CREATE');
		await this.chatModel.create(message);
		console.groupEnd();
	}

	async find(): Promise<ChatInterface[]> {
		console.group('CHAT_SERVICE:FIND');
		const response = await this.chatModel.find<ChatInterface>({}, '', {
			populate: 'users',
		});
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<ChatInterface> {
		console.group('CHAT_SERVICE:FIND_BY_ID');
		const response = await this.chatModel.findById(id, '', {
			populate: 'users',
		});
		if (!response)
			throw new Error(`message not found with the following ID: ${id}`);
		console.groupEnd();
		return response;
	}

	async update(id: string, body: ChatInterface) {
		console.group('CHAT_SERVICE:UPDATE');
		let response;
		if (await this.findById(id))
			response = await this.chatModel.findByIdAndUpdate(id, body, {
				new: true,
			});
		console.groupEnd();
		return response;
	}

	async delete(id: string) {
		console.group('CHAT_SERVICE:DELETE');
		const response = await this.chatModel.deleteOne({ _id: id });
		console.groupEnd();
		return response;
	}
}
