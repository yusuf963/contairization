const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`'Worker app listening on port ${PORT}!'`);
})