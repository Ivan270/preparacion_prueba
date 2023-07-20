import Employee from '../models/Employee.model.js';
import Office from '../models/Office.model.js';

const findAll = async (req, res) => {
	try {
		const offices = await Office.findAll({
			order: [['city', 'ASC']],
			include: [
				{
					model: Employee,
					as: 'employees',
				},
			],
		});
		res.status(200).json({ code: 200, message: 'ok', data: offices });
	} catch (error) {
		res
			.status(500)
			.json({ code: 500, message: 'Error al consultar tabla Office' });
	}
};

const findById = async (req, res) => {
	try {
		let { id } = req.params;
		const office = await Office.findByPk(id, {
			include: [
				{
					model: Employee,
					as: 'employees',
				},
			],
		});
		res.status(200).json({ code: 200, message: 'ok', data: office });
	} catch (error) {
		res
			.status(500)
			.json({ code: 500, message: 'Error al consultar tabla Office por ID' });
	}
};

const controller = {
	findAll,
	findById,
};
export default controller;
