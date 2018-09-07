let router = require('koa-router')(),
	errors = require('../errors');
module.exports = function () {
	router.post('/create', async (ctx) => {
		let publicKey = ctx.request.body.public_key;
		let address = ctx.request.body.address;
		let name = ctx.request.body.name;
		if (!publicKey) return ctx.je(errors.invalidPublicKey);
		if (!address) return ctx.je(errors.invalidAddress);
		try {
			let walletSlot = await models.WalletSlot.create({
				address   : address,
				public_key: publicKey,
				balance   : 0,
				name      : name
			});
			if (walletSlot) {
				return ctx.jr();
			} else {
				return ctx.je(errors.unknownError);
			}
		} catch (e) {
			return ctx.je(errors.unknownError);
		}
	});
	return router.routes();
};