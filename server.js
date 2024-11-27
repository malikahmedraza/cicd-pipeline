const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Hello World!'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});