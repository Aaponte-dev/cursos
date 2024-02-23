// File deepcode ignore WrongNumberOfArgs: <please specify a reason of ignoring this>, file deepcode ignore WrongNumberOfArguments: <please specify a reason of ignoring this>
import { connect } from 'mongoose';
import EnvironmentVariables from '../../config/environmentVariables';

class MongooseModule {
	private static createConnectionUrl() {
		const environment = new EnvironmentVariables();
		const values = environment.getValues();
		const { host, port, user, password, dbName } = values.project.mongoDb;
		let url = 'mongodb://';
		if (user) url += `${user}:`;
		if (password) url += `${password}@`;
		url += `${host}:${port}`;
		console.log('url of connection:', url);
		return {
			url,
			dbName,
		};
	}

	static async connect() {
		console.group('MONGOOSE_MODULE:CONNECT');
		try {
			const { url, dbName } = MongooseModule.createConnectionUrl();
			await this.createConnection(url, dbName);
			console.groupEnd();
		} catch (error) {
			console.error(error);
			if (error instanceof Error) throw new Error(error.message);
		}
	}

	private static async createConnection(url: string, dbName: string) {
		console.group('MONGOOSE_MODULE:CREATE_CONNECTION');
		const response = await connect(url, {
			dbName: dbName,
		});
		response.set('debug', true);
		console.groupEnd();
	}
}

export default MongooseModule;
