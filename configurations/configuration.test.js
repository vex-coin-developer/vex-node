const configuration = {
	get: () => {
		return {
			configuration: 'test',
			databaseName: 'vex-node-test',
			databaseUser: 'root',
			databasePassword: '',
			databasePort: 8888,
			resetDatabase: false,
			socketPort: 6123,
		}
	}
};

module.exports = configuration;