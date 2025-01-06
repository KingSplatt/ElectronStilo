require('dotenv').config();
import mysql from 'mysql2/promise';

const HOST : string = process.env.HOST || 'localhost';
const USER : string = process.env.USER || 'root';
const PUERTO : number = parseInt(process.env.PORT || '3306');
const DATABASE : string = process.env.DATABASE || 'stilo';

const conexion = mysql.createPool({
    host: HOST,
    user: USER,
    port: PUERTO,
    database: DATABASE,
    multipleStatements: false
});

module.exports = conexion;
