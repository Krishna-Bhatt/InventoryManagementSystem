const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_URL|| 'postgres://localhost/inventory_system',
    ssl: process.env.DB_URL ? true : false
})

module.exports.pool = pool;