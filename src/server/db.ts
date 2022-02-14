import { Pool } from 'pg';

const pool = new Pool({
    user: 'joe',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'perntodo',
});

export default pool;
