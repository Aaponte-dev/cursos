import UserInterface from '../../interfaces/userInterface';
import UserModel from '../../entities/user';

export class UserService {
	private readonly userModel;

	constructor() {
		console.group('USER_SERVICE:CONSTRUCTOR');
		this.userModel = UserModel;
		console.groupEnd();
	}

	async create(data: Omit<UserInterface, 'date'>): Promise<void> {
		console.group('USER_SERVICE:CREATE');
		await this.userModel.create({
			...data,
			date: new Date(),
		});
		console.groupEnd();
	}

	async find(name: string): Promise<UserInterface[]> {
		console.group('USER_SERVICE:FIND');
		let query = {};
		if (name) query = { name };
		const response = await this.userModel.find<UserInterface>(query);
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<UserInterface> {
		console.group('USER_SERVICE:FIND_BY_ID');
		const response = await this.userModel.findById(id);
		if (!response)
			throw new Error(`message not found with the following ID: ${id}`);
		console.groupEnd();
		return response;
	}

	async update(id: string, body: Omit<UserInterface, 'date'>) {
		console.group('USER_SERVICE:UPDATE');
		let response;
		if (await this.findById(id))
			response = await this.userModel.findByIdAndUpdate(
				id,
				{
					...body,
					date: new Date(),
				},
				{
					new: true,
				},
			);
		console.groupEnd();
		return response;
	}

	async delete(id: string) {
		console.group('USER_SERVICE:DELETE');
		const response = await this.userModel.deleteOne({ _id: id });
		console.groupEnd();
		return response;
	}
}
