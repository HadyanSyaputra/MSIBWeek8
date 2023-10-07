const fs = require('fs');

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rental',
    password: '123456',
    port: 5432,
})

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'})
pool.query(seedQuery, (error, result) => {
    console.log(error, result)
    pool.end()
})