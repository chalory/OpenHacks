const express = require('express')
const port = 3000
const bodyParser = require('body-parser');
const { Pool } = require("pg");
const connectionString = 'postgresql://chalory:openhacks2023@openhacks2-4434.8nk.cockroachlabs.cloud:26257/defaultdb?application_name=ccloud&sslmode=verify-full'
const app = express();
//cat dbinit.sql | cockroach sql --url 'postgresql://chalory:openhacks2023@openhacks2-4434.8nk.cockroachlabs.cloud:26257/defaultdb?application_name=ccloud&sslmode=verify-full'
// cockroach sql --url 'postgresql://chalory:openhacks2023@openhacks2-4434.8nk.cockroachlabs.cloud:26257/defaultdb?application_name=ccloud&sslmode=verify-full'

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
async function insertData(name, email) {
  try {
    const result = await pool.query('INSERT INTO users (users, email) VALUES ($1, $2)', [name, email]);
    console.log(result.rowCount + ' row(s) inserted');
  } catch (error) {
    console.error(error);
  }
}

insertData('John Doe', 'john.doe@example.com');

async function selectData() {
  try {
    const result = await pool.query('SELECT * FROM users');
    console.log(result.rows);
  } catch (error) {
    console.error(error);
  }
}

// selectData();


// Add middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Your route handlers go here

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})