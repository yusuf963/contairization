const express = require('express');
const keys = require('./keys')

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())

// connect to postgres
const { Pool } = require('pg')
const pgClient = new Pool({
  use: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
})

// connect and craete table named value with number column
pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.error(err));
});

// Redis client setup
const redis = require('redis')
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  rety_straregy: () => 1000
})
const redisPublisher = redisClient.duplicate()

app.get('/', (req, res) => {
  res.send('Hello World from server!');
})
app.get('/values/all', async (req, res) => {
  const values = await pgClient.query('SELECT * from values')
  res.send(values.rows);
})

app.get('/values/current', async (req, res) => {
  redisClient.hGetall('values', (err, values) => {
    res.send(values)
  })
})
app.post('/values', async (req, res) => {
  const index = req.body.index
  if (parent(index) > 40) {
    return res.status(422).send('Index too high')
  }
  redisClient.hSet('value', index, 'Nothing yet!')
  redisPublisher.publish('insert', index)
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index])
  res.send({ working: true })
});


PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT} 🚀🚀!`);
})