import Employee from '../models/Employee.model.js';
import Office from '../models/Office.model.js';
import { Sequelize, Op } from 'sequelize';

const findById = async (req, res) => {
	try {
		let { id } = req.params;
		let employee = await Employee.findByPk(id, {
			include: [
				{
					model: Office,
					as: 'officecode_office',
					attributes: {
						exclude: ['officecode'],
					},
				},
			],
		});
		console.log(employee);
		res.status(200).json({ code: 200, data: employee });
	} catch (error) {}
};

const findSalesManagers = async (req, res) => {
	try {
		let managers = await Employee.findAll({
			where: {
				jobtitle: { [Sequelize.Op.iLike]: '%manager%' },
			},
			order: [['firstname', 'ASC']],
		});
		res.status(200).json({ code: 200, message: 'ok', data: managers });
	} catch (error) {
		res
			.status(500)
			.json({ code: 500, message: 'Error al consultar tabla Employees' });
	}
};


const controller = {
	findSalesManagers,
	findById,
};
export default controller;
