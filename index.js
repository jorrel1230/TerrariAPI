const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

var database = require('./database.json');

app.use(express.json());

app.get('/item/:id', (req, res) => {

    const { id } = req.params;
    res.status(200).send({
        id: id,
        payload: database[id]
    })

});

app.get('/bosses/:name', (req, res) => {

    const { name } = req.params;
    res.status(200).send({
        payload: bosses[name]
    })

});


app.listen(
    PORT,
    () => console.log(`Live On: http://localhost:${PORT}`)
);