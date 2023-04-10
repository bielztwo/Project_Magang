const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'biel5555',
  port: 5432,
});

app.get('/data', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT ultrasonic, nutrition, temperature FROM sensortest ORDER BY created_at DESC LIMIT 1');
      res.send(result.rows);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });
  