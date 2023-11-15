function solve(input){
    let map = new Map();

    for(let string of input){
        let tokens = string.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if(!map.has(product)){//проверяваме дали мап не съдържа продукта
            map.set(product, +quantity); //aко не го съдържа го сетваме с даденото кличество
        }else{
            let currQuantity = map.get(product);//взимаме дадения продукт от мап
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    //kvp - key-value pair
    for(let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);