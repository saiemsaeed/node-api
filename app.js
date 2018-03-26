const express = require('express');
let app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Hi There, From Express!!!");
});

app.get('/status', (req, res) => {
    res.json({status: "I am happy :)"});
})

app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`);
});