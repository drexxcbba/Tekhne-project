const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'rodrigonode',
    database: 'wilsterdb',
    port: '5432'
});

module.exports = pool;