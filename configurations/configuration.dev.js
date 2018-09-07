const configuration = {
	get: () => {
		return {
			configuration: 'dev',
			databaseName: 'vex-node-dev',
			databaseUser: 'root',
			databasePassword: '',
			serverPort: 4780,
			resetDatabase: true,
			socketPort: 5123,
		}
	}
};

module.exports = configuration;