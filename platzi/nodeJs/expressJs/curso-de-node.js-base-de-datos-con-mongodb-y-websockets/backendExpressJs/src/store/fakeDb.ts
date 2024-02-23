class FakeDb {
	private db: string[] = [];

	addMessage(message: string) {
		this.db.push(message);
	}

	getMessages(): Promise<string[]> {
		return new Promise((resolve) => {
			resolve(this.db);
		});
	}
}

export default FakeDb;
