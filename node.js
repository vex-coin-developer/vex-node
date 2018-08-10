let config = require('./configurations/configuration'),
	Models = require('./models/models'),
	icon = require('./icon'),
	VexLib = require('vex-coin-lib-js');
function printIcon() {
}

async function setSequelize() {
	global.models = Models;
	Models.connectToDB();
	Models.load();
	if (global.config.resetDatabase) {
		await Models.resetDB();
	} else {
		Models.updateModels();
	}
}

async function init() {
	global.config = config.getConfiguration();
	await setSequelize();
	icon.print();
	global.vexLib = VexLib;
}
init();