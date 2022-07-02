const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from server!');
})

PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is pl aying and listening on port ${PORT} 🚀🚀!`);
})