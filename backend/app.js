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

// insertData('John Doe', 'john.doe@example.com');

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

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/create-tables', async (req, res) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255),
        email VARCHAR(255) unique,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ratings (
        id SERIAL PRIMARY KEY,
        donor_id SERIAL,
        rate INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_user
          FOREIGN KEY(donor_id)
            REFERENCES users(id)
            ON DELETE CASCADE
      )
    `)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        author_id SERIAL,
        title VARCHAR(255),
        food VARCHAR(255),
        notes VARCHAR(255),
        type VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        CONSTRAINT fk_user
          FOREIGN KEY(author_id)
            REFERENCES users(id)
            ON DELETE CASCADE
      )
    `)
    res.status(200).json({ message: 'tables created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.post('/api/users', async (req, res)  => {
  const { name, address, email, password } = req.body
  const userQuery = {
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email]
  }
  const createUserQuery = {
    text: 'INSERT INTO users(name, address, email, password) VALUES($1, $2, $3, $4)',
    values: [name, address, email, password]
  }
  try {
    const user = await pool.query(userQuery)
    if (user.rows.length !== 0) {
      res.status(400).json({ message: 'user already exists' })
      return
    }
    await pool.query(createUserQuery)
    res.status(200).json({ message: 'successfully created user' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.get('/api/users', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users')
    res.status(200).json(users.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    const query = {
      text: 'SELECT * FROM users WHERE id=$1',
      values: [id]
    }
    const user = await pool.query(query)
    res.status(200).json(user.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.post('/api/ratings', async (req, res) => {
  const { donor_id, rate } = req.body
  try {
    const query = {
      text: 'INSERT INTO ratings(donor_id, rate) VALUES($1, $2)',
      values: [donor_id, rate]
    }
    await pool.query(query)
    res.status(200).json({ message: 'successfully added rating' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.get('/api/ratings', async (req, res) => {
  const { id } = req.query
  try {
    if (!id) {
      const ratings = await pool.query('SELECT * FROM ratings')
      res.status(200).json(ratings.rows)
      return
    }
    const query = {
      text: 'SELECT AVG(rate) AS avg FROM ratings WHERE donor_id=$1',
      values: [id]
    }
    const result = await pool.query(query)
    res.status(200).json(result.rows[0].avg)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.post('/api/posts', async (req, res) => {
  const { author_id, title, food, notes, type } = req.body
  try {
    const query = {
      text: 'INSERT INTO posts(author_id, title, food, notes, type) VALUES($1, $2, $3, $4, $5)',
      values: [author_id, title, food, notes, type]
    }
    await pool.query(query)
    res.status(200).json({ message: 'successfully added post' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await pool.query('SELECT * FROM posts')
    res.status(200).json(posts.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.get('/api/posts/:id', async (req, res) => {
  const { id } = req.params
  try {
    const query = {
      text: 'SELECT * FROM posts WHERE id=$1',
      values: [id]
    }
    const user = await pool.query(query)
    res.status(200).json(user.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'something went wrong' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
