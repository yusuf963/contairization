const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is playing and listening on port ${PORT} 🚀🚀!`);
})