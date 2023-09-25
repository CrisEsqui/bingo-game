import pkg from 'pg';
const { Pool } = pkg;
import { DB_CONFIG } from '../config.js';

const config = {
    host: DB_CONFIG.HOST,
    database: DB_CONFIG.DATABASE,
    user: DB_CONFIG.USER,
    password: DB_CONFIG.PASSWORD,
    port: DB_CONFIG.PORT
};

export const pool = new Pool(config);
