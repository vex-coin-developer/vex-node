const configuration = {
	get: () => {
		return {
			configuration: 'prod',
			databaseName: 'vex-node-prod',
			databaseUser: 'root',
			databasePassword: '',
			serverPort: 4782,
			resetDatabase: false,
			socketPort: 7123,
		}
	}
};

module.exports = configuration;