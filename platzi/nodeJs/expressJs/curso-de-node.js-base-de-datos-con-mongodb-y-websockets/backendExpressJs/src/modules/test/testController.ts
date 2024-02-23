class TestController {
	static create() {
		console.group('TEST_CONTROLLER:CREATE');
		const response = { message: 'test.create' };
		console.groupEnd();
		return response;
	}

	static find() {
		console.group('TEST_CONTROLLER:FIND');
		const response = { message: 'test.find' };
		console.groupEnd();
		return response;
	}

	static update() {
		console.group('TEST_CONTROLLER:UPDATE');
		const response = { message: 'test.update' };
		console.groupEnd();
		return response;
	}

	static delete() {
		console.group('TEST_CONTROLLER:DELETE');
		const response = { message: 'test.delete' };
		console.groupEnd();
		return response;
	}
}

export default TestController;
