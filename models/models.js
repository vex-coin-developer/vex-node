const Sequelize = require("sequelize"),
	  fs = require("fs"),
	  path = require("path");

let db = {
	Sequelize: Sequelize,
	sequelize: '',
	connectToDB: function () {
		this.sequelize = new Sequelize(config.databaseName, config.databaseUser, config.databasePassword, {
			dialect: 'mysql',
			logging: false
		});
	},
	load: function () {
		fs
			.readdirSync(__dirname)
			.filter(function (file) {
				return (file.indexOf(".") !== 0) && (file !== "models.js");
			})
			.forEach(function (file) {
				let model = db.sequelize.import(path.join(__dirname, file));
				db[model.name] = model;
			});
		Object.keys(db).forEach(function (modelName) {
			if ("associate" in db[modelName]) {
				db[modelName].associate(db);
			}
		});
	},
	resetDB: async function () {
		await db.sequelize.sync({force: true});
		await db.setSeed();
	},
	updateModels: function () {
		db.sequelize.sync({force: false});
	},
	setSeed: async function() {
		await require("../seed").run();
	}
};

module.exports = db;