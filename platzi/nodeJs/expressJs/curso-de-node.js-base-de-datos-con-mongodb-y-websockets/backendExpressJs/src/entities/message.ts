import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import { User } from './user';

class Message {
	@prop({ ref: () => User, required: true, type: Schema.Types.ObjectId })
	user!: Ref<User>;

	@prop({ type: String, required: true, lowercase: true })
	message!: string;

	@prop({ type: Date, required: false, default: Date.now() })
	date!: Date;
}

const MessageModel = getModelForClass(Message);

export default MessageModel;
