module.exports = function (sequelize, DataTypes) {
	let WalletSlot = sequelize.define("WalletSlot", {
			address   : {
				type      : DataTypes.STRING(66),
				primaryKey: true
			},
			public_key: DataTypes.STRING(130),
			balance   : DataTypes.BIGINT,
			name      : DataTypes.STRING
		},
		{
			tableName: 'wallets_slots'
		}
	);
	WalletSlot.associate = function (models) {
	};
	return WalletSlot;
};