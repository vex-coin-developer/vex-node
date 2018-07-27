const configuration = {
	get: () => {
		return {
			configuration: 'prod',
			databaseName: 'vex-node-prod',
			databaseUser: 'root',
			databasePassword: '',
			databasePort: 8888,
			resetDatabase: false,
			socketPort: 7123,
		}
	}
};

module.exports = configuration;