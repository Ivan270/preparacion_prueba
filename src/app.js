import express from 'express';
import upload from 'express-fileupload';
import cors from 'cors';
import morgan from 'morgan';
import { create } from 'express-handlebars';

import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import routes
import viewsRoutes from './routes/views.routes.js';
import officesRoutes from './routes/offices.routes.js';
import employeesRoutes from './routes/employees.routes.js';

const app = express();

// HBS Config
const hbs = create({
	partialsDir: [path.resolve(__dirname, './views/partials/')],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views'));

// Middlewares generales
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
// Public folder
app.use('/public', express.static(path.join(__dirname, '/../public')));

// Rutas endpoints
app.use('/api/v1/offices', officesRoutes);
app.use('/api/v1/employees', employeesRoutes);
// Rutas de vista
app.use('/', viewsRoutes);

export default app;
