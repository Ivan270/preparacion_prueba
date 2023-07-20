import Office from '../models/Office.model.js';
import Employee from '../models/Employee.model.js';

const home = (req, res) => {
	res.render('home', {
		home: true
	});
};
const employeesOffice = async (req, res) => {
	try {
		let requestOptionsOffice = {
			method: 'GET',
			redirect: 'follow',
		};

		let response = await fetch(
			'http://localhost:3000/api/v1/offices',
			requestOptionsOffice
		);
		let oficinas = await response.json();

		let requestOptionsManagers = {
			method: 'GET',
			redirect: 'follow',
		};
		let responseManagers = await fetch(
			'http://localhost:3000/api/v1/employees/sales-managers',
			requestOptionsManagers
		);
		let managers = await responseManagers.json();
		res.render('gestion', {
			offices: oficinas,
			managers,
			gestion: true
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ code: 500, message: 'Error al consultar vendedores-oficinas' });
	}
};

const employee = async(req,res)=>{
	let {id} = req.params;

	let requestOptions = {
		method: 'GET',
		redirect: 'follow',
	};
	let response = await fetch(
		`http://localhost:3000/api/v1/employees/id/${id}`,
		requestOptions
	);
	let employee = await response.json();
	res.render('employee', {
		employee: employee.data
	})
}

const controller = {
	home,
	employeesOffice,
	employee
};
export default controller;
