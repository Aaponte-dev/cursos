import { Ref } from '@typegoose/typegoose';
import { User } from '../entities/user';

interface MessageInterface {
	readonly user: Ref<User>;
	readonly message: string;
}

export default MessageInterface;
