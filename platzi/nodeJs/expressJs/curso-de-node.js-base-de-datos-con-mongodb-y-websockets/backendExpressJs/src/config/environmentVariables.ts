import 'dotenv/config';

class EnvironmentVariables {
	private readonly port: number;

	private readonly mongoHost: string | undefined;

	private readonly mongoPort: number;

	private readonly mongoUser: string | undefined;

	private readonly mongoPassword: string | undefined;

	private readonly mongoDbName: string;

	constructor() {
		this.validateValues();
		const {
			PORT,
			MONGO_PORT,
			MONGO_HOST,
			MONGO_USER,
			MONGO_PASSWORD,
			MONGO_DB_NAME,
		} = process.env;
		this.port = PORT ? Number(PORT) : 3050;
		this.mongoHost = MONGO_HOST;
		this.mongoPort = 27017;
		if (MONGO_PORT && !Number.isNaN(Number(MONGO_PORT)))
			this.mongoPort = Number(MONGO_PORT);
		this.mongoUser = MONGO_USER;
		this.mongoPassword = MONGO_PASSWORD;
		this.mongoDbName = MONGO_DB_NAME || 'test';
	}

	private validateValues(): void {
		const { PORT, MONGO_PORT, MONGO_HOST, MONGO_DB_NAME } = process.env;

		if (Number.isNaN(Number(PORT)))
			throw new Error("field 'PORT' cannot be a string");
		if (Number.isNaN(Number(MONGO_PORT)))
			throw new Error("field 'MONGO_PORT' cannot be a string");
		if (!MONGO_HOST) throw new Error("field 'MONGO_HOST' cannot be a null");
		if (!MONGO_DB_NAME)
			throw new Error("field 'MONGO_DB_NAME' cannot be a null");
	}

	getValues() {
		return {
			project: {
				port: this.port,
				mongoDb: {
					host: this.mongoHost,
					port: this.mongoPort,
					user: this.mongoUser,
					password: this.mongoPassword,
					dbName: this.mongoDbName,
				},
			},
		};
	}
}

export default EnvironmentVariables;
