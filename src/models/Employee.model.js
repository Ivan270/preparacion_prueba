import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';

const Employee = sequelize.define(
	'employees',
	{
		employeenumber: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			primaryKey: true,
		},
		lastname: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		firstname: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		extension: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		// FK
		officecode: {
			type: DataTypes.STRING(10),
			allowNull: false,
			references: {
				model: 'offices',
				key: 'officecode',
			},
		},
		reportsto: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: null,
		},
		jobtitle: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'employees',
		schema: 'public',
		timestamps: false,
		indexes: [
			{
				name: 'employees_pkey',
				unique: true,
				fields: [{ name: 'employeenumber' }],
			},
		],
	}
);

export default Employee;
