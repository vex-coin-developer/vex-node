module.exports = function (sequelize, DataTypes) {
	let Account = sequelize.define("Account", {
		id     : {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		balance: DataTypes.BIGINT,
		name   : DataTypes.STRING
	});
	Account.associate = function (models) {
	};
	return Account;
};