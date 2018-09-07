const configuration = {
	get: () => {
		return {
			configuration: 'test',
			databaseName: 'vex-node-test',
			databaseUser: 'root',
			databasePassword: '',
			serverPort: 4781,
			resetDatabase: false,
			socketPort: 6123,
		}
	}
};

module.exports = configuration;