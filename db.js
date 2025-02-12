import mysql from 'mysql';
import config from './config.js';

const pool = mysql.createPool({
    ...config,
    connectionLimit: 10,
});

export default pool;