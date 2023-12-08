/* istanbul ignore file */
const { Pool } = require('pg');
require('dotenv').config();

// const testConfig = {
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
// };

const pool = new Pool({
  connectionString: process.env.PGHOST,
});

module.exports = pool;
