import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Product = sequelize.define(
	'products',
	{
		productcode: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true,
		},
		productname: {
			type: DataTypes.STRING(70),
			allowNull: false,
		},
		productline: {
			type: DataTypes.STRING(50),
			allowNull: false,
			references: {
				model: 'productlines',
				key: 'productline',
			},
		},
		productscale: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		productvendor: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		productdescription: {
			type: DataTypes.STRING(2000),
			allowNull: false,
		},
		quantityinstock: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		buyprice: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		msrp: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'products',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'products_pkey',
				unique: true,
				fields: [{ name: 'productcode' }],
			},
		],
	}
);

export default Product;
