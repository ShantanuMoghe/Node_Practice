const express = require("express");
const app = express();
const PORT= 5000;
const jsonData = require('./data');
const logger = require('./logger_middleware');


app.get('/', logger, (req, res)=>{
    //res.json(jsonData)
    res.send(`<H1>Home Page</H1><a href="/api/products">Products</a>`)
})

app.get('/api/products', (req,res)=>{
    const productsDesc = jsonData.products.map((el)=>{
        const desc = el.desc
        return desc;
    })
    res.send(productsDesc);
})

app.listen(PORT, ()=>{
    console.log(`node server is listening on http://localhost:${PORT}`);
})