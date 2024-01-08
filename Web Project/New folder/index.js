let express = require('express');

let app =express();

let counter = 0;

let products = [
    {
        name: "Wipers"
    },
    {
        name: "Tyres"
    }
]
app.get('/', (req,res)=>{
    counter++;
    res.send(`<h1>Hello Word!</h1><a href="/about">Abot page</a><p>You visited the page ${counter} times</p>`);
});

app.get('/about', (req,res)=>{
    res.send('<h1>About page</h1>');
});

app.get('/catalog', (req,res)=>{
    res.send(`<h1>Catalog</h1>
    <ul>
        ${products.map((p,i)=>`<li><a href = "/catalog/${i}">${p.name}</a></li>`)}
    </ul>`);
});

app.get('/catalog/:id', (req,res)=>{
    let product = products[req.params.id];
    res.send(`<h1>Catalog</h1><h2>${product.name}</h2><a href="/catalog">Back to list</a>`);
});
app.listen(3000);