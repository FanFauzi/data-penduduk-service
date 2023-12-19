/* istanbul ignore file */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PGHOST,
});

// TEST
// const testConfig = {
//   host: process.env.PGHOST_TEST,
//   port: process.env.PGPORT_TEST,
//   user: process.env.PGUSER_TEST,
//   password: process.env.PGPASSWORD_TEST,
//   database: process.env.PGDATABASE_TEST,
// };
// const pool = new Pool(testConfig);

module.exports = pool;
