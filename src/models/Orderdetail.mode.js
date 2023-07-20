import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const OrderDetail = sequelize.define(
	'orderdetails',
	{
		// FK
		ordernumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'orders',
				key: 'ordernumber',
			},
		},
		// FK
		productcode: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'products',
				key: 'productcode',
			},
		},
		quantityordered: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		priceeach: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		orderlinenumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'orderdetails',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'orderdetails_pkey',
				unique: true,
				fields: [{ name: 'ordernumber' }, { name: 'productcode' }],
			},
		],
	}
);

export default OrderDetail;
