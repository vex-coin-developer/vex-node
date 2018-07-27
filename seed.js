let seed = {
	run: async function () {
		console.log(new Date().toLocaleString(), '+++ Start Seed +++');
		console.log(new Date().toLocaleString(), '+++ Generating accounts +++');
		await models.Account.create({
			id     : 'vex_1Lvu2mraCy73ATfA7CqvCW7eETDGMqa6PU',
			balance: 1000000000000000000,
			name   : 'Avihai Cohen'
		});
		console.log(new Date().toLocaleString(), '+++ Finish Seed +++');
	}
};
module.exports = seed;