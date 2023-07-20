import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Order = sequelize.define(
	'orders',
	{
		ordernumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
		},
		orderdate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		requireddate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		shippeddate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
		status: {
			type: DataTypes.STRING(15),
			allowNull: false,
		},
		comments: {
			type: DataTypes.STRING(1000),
			allowNull: true,
		},
		// FK
		customernumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			references: {
				model: 'customers',
				key: 'customernumber',
			},
		},
	},
	{
		sequelize,
		tableName: 'orders',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'orders_pkey',
				unique: true,
				fields: [{ name: 'ordernumber' }],
			},
		],
	}
);

export default Order;
