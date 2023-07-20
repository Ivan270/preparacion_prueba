import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Payment = sequelize.define(
	'payments',
	{
		// FK
		customernumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'customers',
				key: 'customernumber',
			},
		},
		checknumber: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
		},
		paymentdate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'payments',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'payments_pkey',
				unique: true,
				fields: [{ name: 'customernumber' }, { name: 'checknumber' }],
			},
		],
	}
);

export default Payment;
