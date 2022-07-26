/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('12345');
console.log(SistemaAutenticacion.login(cliente,'12345'));
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '121242', 10000);
empleado.asignarClave('12345');
const gerente = new Gerente('Pedro Rivas', '132165',12000);
const director = new Director('Felipe Guell', '231654', 15000);

console.log(SistemaAutenticacion.login(empleado,'12345'));
