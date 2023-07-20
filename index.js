import app from './src/app.js';
import sequelize from './src/config/database.config.js';
import chalk from 'chalk';

// Modelos
import './src/models/asociaciones.js';

const PORT = process.env.PORT || 3000;

(async () => {
	try {
		await sequelize.authenticate();
		console.log(chalk.blue.bold('>> Conectado con éxito a la base de datos'));
		await sequelize.sync({ force: false, alter: true });
		app.listen(PORT, () => {
			console.log(
				chalk.green.bold('>> Servidor escuchando en http://localhost:' + PORT)
			);
		});
	} catch (error) {
		console.log(chalk.red('Ha ocurrido un error', error));
	}
})();
