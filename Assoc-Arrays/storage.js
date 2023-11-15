function store(products){
    let storage = {};
    for(let product of products){
        let [prodName, quantity] = product.split(" ");
        quantity = Number(quantity);

        if(storage.hasOwnProperty(prodName)){
            storage[prodName] += quantity;
        }else{
            storage[prodName] = quantity;
        }
    }

    for(let key of Object.keys(storage)){
        console.log(`${key} -> ${storage[key]}`);
    }
}

store(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);