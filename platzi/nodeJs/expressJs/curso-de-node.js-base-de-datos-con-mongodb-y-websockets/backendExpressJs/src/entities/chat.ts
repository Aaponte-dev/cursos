import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import { User } from './user';

class Chat {
	@prop({ ref: () => User, required: true, type: Schema.Types.ObjectId })
	users!: Ref<User>[];

	@prop({ type: Date, required: false, default: Date.now() })
	date!: Date;
}

const ChatModel = getModelForClass(Chat);

export default ChatModel;
