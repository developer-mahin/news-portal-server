const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


const categories = require('./Data/categories.json');
const news = require('./Data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world hello hello from node js js sf')
})

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === "08") {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === id)
        res.send(selectedCategory)
    }
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})