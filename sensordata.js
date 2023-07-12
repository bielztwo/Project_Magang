const express = require("express");
const app = express();
const port = 8999;
const { Client } = require("pg");
const moment = require("moment-timezone");
process.env.TZ = "Asia/Jakarta";

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Marcello21",
    port: 5432,
});

client.connect();

// Define the database query function
app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    client.query(
        "SELECT created_at, ultrasonic, nutrition, temperature, ph FROM sensor ORDER BY created_at DESC LIMIT 1",
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error retrieving data from database");
            } else {
                const formattedDate = result.rows.map((row) => ({
                    created_at: moment
                        .tz(row.created_at, "UTC")
                        .tz("Asia/Jakarta")
                        .format(),
                    ultrasonic: row.ultrasonic,
                    nutrition: row.nutrition,
                    temperature: row.temperature,
                    ph: row.ph,
                }));
                //console.log(formattedDate);
                res.send(formattedDate);
            }
        }
    );
});


app.get("/all", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    client.query(
        `SELECT created_at, ultrasonic, nutrition, temperature, ph, room_temperature, humidity, intensitas_atas, intensitas_bawah 
  FROM sensor 
  ORDER BY created_at`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error fetching data from PostgreSQL");
            } else {
                const formattedDate = result.rows.map((row) => ({
                    created_at: moment
                        .tz(row.created_at, "UTC")
                        .tz("Asia/Jakarta")
                        .format('YYYY-MM-DD HH:mm:ss'),
                    ultrasonic: row.ultrasonic,
                    nutrition: row.nutrition,
                    temperature: row.temperature,
                    ph: row.ph,
                    room_temperature: row.room_temperature,
                    humidity: row.humidity,
                    intensitas_atas: row.intensitas_atas,
                    intensitas_bawah: row.intensitas_bawah,
                }));

                //console.log(formattedDate);
                res.send(formattedDate);
            }
            // Do something with the result
        }
    );
});
app.get("/2minutes", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    // Execute a SQL query to get data from PostgreSQL
    client.query(
        `SELECT DISTINCT ON (created_at)
          created_at, 
          ultrasonic,
          nutrition,
          temperature,
          ph
          FROM (
          SELECT 
              date_trunc('minute', created_at) - 
              (date_part('minute', created_at)::int % 2) * INTERVAL '1 minute' AS created_at, 
              ultrasonic, nutrition, temperature, ph
          FROM sensor
          WHERE created_at >= (SELECT MIN(created_at) FROM sensor)
              AND created_at <= (SELECT MAX(created_at) FROM sensor)
          ORDER BY created_at
          ) sub
          ORDER BY created_at;`,
        (err, result) => {
            if (err) {
                console.log(err.stack);
                res.status(500).send("Error fetching data from PostgreSQL");
            } else {
                const formattedDate = result.rows.map((row) => ({
                    created_at: moment
                        .tz(row.created_at, "UTC")
                        .tz("Asia/Jakarta")
                        .format(),
                    ultrasonic: row.ultrasonic,
                    nutrition: row.nutrition,
                    temperature: row.temperature,
                    ph: row.ph,
                }));
                //console.log(formattedDate);
                res.send(formattedDate);
            }
        }
    );
});

app.get("/10minutes", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    // Execute a SQL query to get data from PostgreSQL
    client.query(
        `SELECT DISTINCT ON (created_at)
          created_at, 
          ultrasonic,
          nutrition,
          temperature,
          ph
          FROM (
          SELECT 
              date_trunc('minute', created_at) - 
              (date_part('minute', created_at)::int % 10) * INTERVAL '1 minute' AS created_at, 
              ultrasonic, nutrition, temperature, ph
          FROM sensor
          WHERE created_at >= (SELECT MIN(created_at) FROM sensor)
              AND created_at <= (SELECT MAX(created_at) FROM sensor)
          ORDER BY created_at
          ) sub
          ORDER BY created_at;`,
        (err, result) => {
            if (err) {
                console.log(err.stack);
                res.status(500).send("Error fetching data from PostgreSQL");
            } else {
                const formattedDate = result.rows.map((row) => ({
                    created_at: moment
                        .tz(row.created_at, "UTC")
                        .tz("Asia/Jakarta")
                        .format(),
                    ultrasonic: row.ultrasonic,
                    nutrition: row.nutrition,
                    temperature: row.temperature,
                    ph: row.ph,
                }));
                //console.log(formattedDate);
                res.send(formattedDate);
            }
        }
    );
});
app.get("/1hour", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    // Execute a SQL query to get data from PostgreSQL
    client.query(
        `SELECT DISTINCT ON (created_at)
          created_at, 
          ultrasonic,
          nutrition,
          temperature,
          ph,
          room_temperature,
          humidity,
          intensitas_atas,
          intensitas_bawah
          FROM (
          SELECT 
              date_trunc('minute', created_at) - 
              (date_part('minute', created_at)::int % 60) * INTERVAL '1 minute' AS created_at, 
              ultrasonic, nutrition, temperature, ph, room_temperature,humidity,intensitas_atas,intensitas_bawah
          FROM sensor
          WHERE created_at >= (SELECT MIN(created_at) FROM sensor)
              AND created_at <= (SELECT MAX(created_at) FROM sensor)
          ORDER BY created_at
          ) sub
          ORDER BY created_at;`,
        (err, result) => {
            if (err) {
                console.log(err.stack);
                res.status(500).send("Error fetching data from PostgreSQL");
            } else {
                const formattedDate = result.rows.map((row) => ({
                    created_at: moment
                        .tz(row.created_at, "UTC")
                        .tz("Asia/Jakarta")
                        .format(),
                    ultrasonic: row.ultrasonic,
                    nutrition: row.nutrition,
                    temperature: row.temperature,
                    ph: row.ph,
                    room_temperature: row.room_temperature,
                    humidity: row.humidity,
                    intensitas_atas: row.intensitas_atas,
                    intensitas_bawah: row.intensitas_bawah,
                }));
                //console.log(formattedDate);
                res.send(formattedDate);
            }
        }
    );
});
app.use(express.json());
app.post('/submit', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const formData = req.body;

    // Construct the SQL query
    const query = 'INSERT INTO data_tower (tower, nama_tanaman, produsen, expired, start_penyemaian, tanggal_pemindahan, tanggal_kematian, tanggal_panen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

    // Extract the form data into an array
    const values = [formData.towerinput, formData.namaTanaman, formData.produsen, formData.exp, formData.strpenyemaian, formData.tglpemindahan, formData.tglkematian, formData.tglpanen]; // Replace field1 and field2 with your actual field names

    // Execute the query using the connection pool
    client.query(query, values)
        .then(() => {
            console.log('Data saved to the database');
            res.sendStatus(200); // Send a success status back to the client
        })
        .catch((error) => {
            console.error('Error saving data to the database', error);
            res.sendStatus(500); // Send an error status back to the client
        });
});

// Set up the interval to call the function every 1 second
//setInterval(fetchsensorData, 1000);        },