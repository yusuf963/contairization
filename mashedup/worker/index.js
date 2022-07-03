const express = require('express');
const redis = require('redis')
const keys = require('./keys')
const app = express();
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
})
const sub = redisClient.duplicate()

const fib = (index) => {
  if (index < 2) return 1
  return fib(index - 1) + fib(index - 2)

}

console.log(fib(4))

PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`'Worker app listening on port ${PORT}!'`);
})