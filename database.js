const { Pool } = require('pg')
 
const pool = new Pool({
  // user: 'me',
  // host: 'localhost',
  // database: 'CommuFund',
  // password: 'password',
  // port: 5432,
  connectionString: process.env.POSTGRES_URL,
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool