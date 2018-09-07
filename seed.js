let seed = {
	run: async function () {
		console.log(new Date().toLocaleString(), '+++ Start Seed +++');
		console.log(new Date().toLocaleString(), '+++ Generating Wallet Slots +++');
		await models.WalletSlot.create({
			address   : '037C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E9741',
			public_key: '047C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E974126F271C1B4A866EC21AA2C16A3D588226109C9157C7D730C16F3DF83D6747763',
			balance   : 1000000000000000000,
			name      : 'Avihai Cohen'
		});
		console.log(new Date().toLocaleString(), '+++ Finish Seed +++');
	}
};
module.exports = seed;