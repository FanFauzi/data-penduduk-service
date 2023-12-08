/* istanbul ignore file */
const { Pool } = require('pg');

const connestionString = 'postgresql://datapenduduk330:CaLyxE9AKF3V@ep-gentle-heart-28962184.ap-southeast-1.aws.neon.tech/datpen?sslmode=require';

// const testConfig = {
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE,
// };

const pool = new Pool({
  connectionString: connestionString,
});

module.exports = pool;
