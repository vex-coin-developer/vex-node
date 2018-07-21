let config = require('./configurations/configuration'),
	Models = require('./models/models'),
	icon = require('./icon');
function printIcon() {
}

async function setSequelize() {
	global.models = Models;
	Models.connectToDB();
	Models.load();
	if (config.resetDatabase) {
		await Models.resetDB();
	} else {
		Models.updateModels();
	}
}

async function init() {
	global.config = config.getConfiguration();
	await setSequelize();
	icon.print();
}
init();