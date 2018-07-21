module.exports = function (sequelize, DataTypes) {
	let Transaction = sequelize.define("Transaction", {
		id     : {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		amount: DataTypes.BIGINT,
		code  : DataTypes.INTEGER,
		tag   : DataTypes.STRING,
		data  : DataTypes.TEXT
	});
	Transaction.associate = function (models) {
	};
	return Transaction;
};