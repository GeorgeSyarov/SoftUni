function store(stocks1, stocks2) {
  let storage = {};
  while (stocks1.length > 0) {
    let product = stocks1.shift();
    let qty = Number(stocks1.shift());

    storage[product] = qty;
  }

  while (stocks2.length > 0) {
    let product = stocks2.shift();
    let qty = Number(stocks2.shift());
    if (product in storage) {
      storage[product] += qty;
    } else {
      storage[product] = qty;
    }
  }

  let allProducts = Object.entries(storage);
  
  for(let product of allProducts){
    console.log(`${product[0]} -> ${product[1]}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
