const configuration = {
	get: () => {
		return {
			databaseName: 'vex-node-dev',
			databaseUser: 'root',
			databasePassword: '',
			databasePort: 8888,
			resetDatabase: true,
			socketPort: 5123,
		}
	}
};

module.exports = configuration;