let config       = require('./configurations/configuration'),
	Models       = require('./models/models'),
	icon         = require('./icon'),
	VexLib       = require('vex-coin-lib-js'),
	Koa          = require('koa'),
	bodyParser   = require('koa-bodyparser'),
	router       = require('koa-router')(),
	ServerRouter = require('./router');
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
function startServer() {
	const app = new Koa();
	app.use(bodyParser());
	app.use(async (ctx, next) => {
		ctx.je = function (data) {
			ctx.set('Content-Type', 'application/json');
			ctx.status = 400;
			ctx.body = {
				error: data
			};
		};
		ctx.jr = function (data) {
			ctx.set('Content-Type', 'application/json');
			ctx.status = 200;
			ctx.body = {
				data: data
			};
		};
		await next();
	});
	ServerRouter.load(router);
	app.use(router.routes()).use(router.allowedMethods());
	app.listen(global.config.serverPort);
	console.log(new Date().toLocaleString(), 'Server started: http://localhost:' + global.config.serverPort);
}
async function init() {
	global.config = config.getConfiguration();
	await setSequelize();
	icon.print();
	startServer();
	global.vexLib = VexLib;
}
init();