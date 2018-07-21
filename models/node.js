module.exports = function (sequelize, DataTypes) {
	let Node = sequelize.define("Node", {
		id     : {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		address   : DataTypes.STRING,
		name   : DataTypes.STRING,
		is_light : DataTypes.BOOLEAN
	});
	Node.associate = function (models) {
	};
	return Node;
};