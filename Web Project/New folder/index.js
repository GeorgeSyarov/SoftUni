let express = require("express");
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

let counter = 0;

let products = [
  {
    name: "Wipers",
  },
  {
    name: "Tyres",
  },
];
app.get("/", (req, res) => {
  counter++;

  if (counter >= 16) {
    res.redirect("/blocked");
  } else {
    res.send(
      `<h1>Hello Word!</h1><a href="/about">Abot page</a><p>You visited the page ${counter} times</p>`
    );
  }
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/blocked", (req, res) => {
  res.send("<h1>Blocked</h1><p>You have visited that page too many time</p>");
});
app.get("/catalog", (req, res) => {
  res.send(`<h1>Catalog</h1>
  <p><a href="/create">Create Product</a></p>
    <ul>
        ${products.map(
          (p, i) => `<li><a href = "/catalog/${i}">${p.name}</a></li>`
        )}
    </ul>`);
});

app.get("/catalog/:id", (req, res) => {
  let product = products[req.params.id];
  res.send(
    `<h1>Catalog</h1><h2>${product.name}</h2><a href="/catalog">Back to list</a>`
  );
});

app.get("/create", (req, res) => {
  res.send(
    '<h1>Create Product</h1> <form action="/create" method="post"><input type="text" name="productName"><input type="submit" value="Publish"></form>'
  );
});
app.post("/create", (req, res) => {
  console.log("Recieved request to publish data");
  console.log(req.body);
  let product = {
    name: req.body.productName
  };
  products.push(product);
  res.redirect("/catalog");
});
app.listen(3000);
