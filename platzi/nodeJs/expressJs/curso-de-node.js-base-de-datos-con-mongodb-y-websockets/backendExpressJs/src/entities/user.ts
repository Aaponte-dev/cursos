import { getModelForClass, prop } from '@typegoose/typegoose';

export class User {
	@prop({ type: String, required: true, lowercase: true })
	name!: string;

	@prop({ type: Date, required: false, default: Date.now() })
	date!: Date;
}

const UserModel = getModelForClass(User);

export default UserModel;
