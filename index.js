const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


const categories = require('./Data/categories.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world hello hello from node js js sf')
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})