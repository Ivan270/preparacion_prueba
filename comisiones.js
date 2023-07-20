import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
	.command({
		command: 'calculo_comisiones',
		describe: 'Calcular comisiones de ventas',
		builder: {
			tipo: {
				describe: 'Tipo de comisión (simple o complejo)',
				demandOption: true,
				type: 'string',
			},
			ventas: {
				describe: 'Monto total de ventas',
				demandOption: true,
				type: 'number',
			},
		},
		handler: (argv) => {
			const { tipo, ventas } = argv;
			console.log('================================================');
			console.log('Demostración Calculadora de Comisiones de Venta');
			console.log('================================================');

			if (tipo === 'simple') {
				let comision = ventas > 10000 ? ventas * 0.1 : ventas * 0.05;
				console.log(`Comisión (de tipo simple) calculada: US$ ${comision}`);
			} else if (tipo === 'compleja') {
				let comision = Math.round(ventas * 0.05);

				if (ventas > 5000 && ventas <= 10000) {
					comision += Math.round(ventas * 0.02);
				} else if (ventas > 10000) {
					comision += Math.round(ventas * 0.03);
				}

				if (ventas > 50000) {
					comision += Math.round(ventas * 0.01);
				}

				console.log(`Comisión (de tipo compleja) calculada: ${comision}`);
			} else {
				console.log(
					'Tipo de comisión inválido. Debe ser "simple" o "compleja".'
				);
			}
		},
	})
	.parse();
