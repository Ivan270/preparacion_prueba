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
					include: [{ model: Office, as: 'officecode_office' }],
				},
			],
		});
		
		// office.forEach(offe=>console.log(offe))
		res.status(200).json({ code: 200, message: 'ok', data: office });
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ code: 500, message: 'Error al consultar tabla Office por ID' });
	}
};

async function findOfficesByJobTitle(req,res) {
	try {
		const {jobtitle} = req.params;
		// Extraer el territorio del jobtitle utilizando una expresión regular
		const regex = /\(([^)]+)\)/;
		const match = regex.exec(jobtitle);
		const territory = match ? match[1] : null;

		if (!territory) {
			console.log('No se encontró un territorio en el jobtitle proporcionado.');
			return;
		}

		// Obtener todas las oficinas con el territorio correspondiente
		const officesWithTerritory = await Office.findAll({
			where: {
				territory,
			},
			include: [
				{
					model: Employee,
					as: 'employees'
				}
			]
		});

		// console.log(`Oficinas con territory "${territory}":`);
		// officesWithTerritory.forEach((office) => {
		// 	console.log(
		// 		`Officecode: ${office.officecode}, City: ${office.city}, Territory: ${office.territory}`
		// 	);
		// });
		res.status(200).json({code:200, message:'ok',data: officesWithTerritory})
	} catch (error) {
		res.status(500).json({code:500, message: 'Error al consultar oficinas para job title'})
	} 
}

const controller = {
	findAll,
	findById,
	findOfficesByJobTitle
};
export default controller;
