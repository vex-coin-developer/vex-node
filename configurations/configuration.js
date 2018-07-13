const configurations = {
	getConfiguration: () => {
		let configuration;
		process.argv.forEach((arg) => {
			if(arg.indexOf('--configuration=') !== -1) {
				switch (arg) {
					case '--configuration=dev':
						configuration = require('./configuration.dev').get();
						break;
					case '--configuration=test':
						configuration = require('./configuration.test').get();
						break;
					case '--configuration=prod':
						configuration = require('./configuration.prod').get();
						break;
				}
			}
		});
		if (!configuration) {
			console.log('\x1b[35m', 'Invalid configuration');
			console.log('\x1b[35m', 'for dev run "node node --configuration=dev"');
			console.log('\x1b[35m', 'for test run "node node --configuration=test"');
			console.log('\x1b[35m', 'for prod run "node node --configuration=prod"');
			process.exit();
		} else {
			return configuration;
		}
	}
};

module.exports = configurations;