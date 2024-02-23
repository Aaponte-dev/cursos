import { Ref } from '@typegoose/typegoose';
import { User } from '../entities/user';

interface ChatInterface {
	readonly users: Ref<User>[];
}

export default ChatInterface;
