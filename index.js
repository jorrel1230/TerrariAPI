const express = require('express');
const app = express();
const PORT = 8080;

var database = require('./database.json');

app.use(express.json());

app.get('/id/:id', (req, res) => {

    const { id } = req.params;
    res.status(200).send({
        id: id,
        payload: database[id]
    })

});


app.listen(
    PORT,
    () => console.log(`Live On: http://localhost:${PORT}`)
);