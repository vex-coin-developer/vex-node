"use strict";
let sr = {
	load: function (router) {
		router.use('/api/node', require('./api/node')());
		router.use('/api/transaction', require('./api/transaction')());
		router.use('/api/walletSlot', require('./api/walletSlot')());
	}
};
module.exports = sr;