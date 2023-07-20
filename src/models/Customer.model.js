import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Customer = sequelize.define(
	'customers',
	{
		customernumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
		},
		customername: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		contactlastname: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		contactfirstname: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		addressline1: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		addressline2: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: 'NULL',
		},
		city: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		state: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: 'NULL',
		},
		postalcode: {
			type: DataTypes.STRING(15),
			allowNull: true,
			defaultValue: 'NULL',
		},
		country: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		// FK START
		// salesrepemployeenumber: {
		// 	type: DataTypes.DECIMAL,
		// 	allowNull: true,
		// 	defaultValue: null,
		// 	references: {
		// 		model: 'employees',
		// 		key: 'employeenumber',
		// 	},
		// },
		// FK END
		creditlimit: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: null,
		},
	},
	{
		sequelize,
		tableName: 'customers',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'customers_pkey',
				unique: true,
				fields: [{ name: 'customernumber' }],
			},
		],
	}
);

export default Customer;
