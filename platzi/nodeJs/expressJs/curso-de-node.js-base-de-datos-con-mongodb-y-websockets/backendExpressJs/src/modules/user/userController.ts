import UserInterface from '../../interfaces/userInterface';
import { UserService } from './userService';

class UserController {
	private userService: UserService;

	constructor() {
		console.group('USER_CONTROLLER:CONSTRUCTOR');
		this.userService = new UserService();
		console.groupEnd();
	}

	async create(name: Omit<UserInterface, 'date'>): Promise<unknown> {
		console.group('USER_CONTROLLER:CREATE');
		await this.userService.create(name);
		const response = { message: 'user.create' };
		console.groupEnd();
		return response;
	}

	async find(name: string): Promise<UserInterface[] | []> {
		console.group('USER_CONTROLLER:FIND');
		const response = await this.userService.find(name);
		console.groupEnd();
		return response;
	}

	async findById(id: string): Promise<UserInterface> {
		console.group('USER_CONTROLLER:FIND_BY_ID');
		const response = await this.userService.findById(id);
		console.groupEnd();
		return response;
	}

	async update(id: string, body: Omit<UserInterface, 'date'>) {
		console.group('USER_CONTROLLER:UPDATE');
		await this.userService.update(id, body);
		const response = { message: 'user.update' };
		console.groupEnd();
		return response;
	}

	async delete(id: string): Promise<unknown> {
		console.group('USER_CONTROLLER:DELETE');
		await this.userService.delete(id);
		const response = { message: 'user.delete' };
		console.groupEnd();
		return response;
	}
}

export default UserController;
