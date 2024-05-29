const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

var items = require('./items.json');
var bosses = require('./bosses.json');

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());

app.get('/items/:id', (req, res) => {

    const { id } = req.params;
    res.status(200).send({
        id: id,
        payload: items[id]
    })

});

app.get('/bosses/:name', (req, res) => {

    const { name } = req.params;
    res.status(200).send({
        payload: bosses[name]
    })

});


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(
    PORT,
    () => console.log(`Live On: http://localhost:${PORT}`)
);