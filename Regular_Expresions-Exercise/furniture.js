function solve (input){
    let items = [];
    let allPrice = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;

    let command = input.shift();

    while(command != "Purchase"){
        let match = command.match(pattern);
        if(match){
            let {name,price,quantity} = match.groups;

            let totalPrice = Number(price) * Number(quantity);
            allPrice += totalPrice;
            items.push(name);

        }
        command = input.shift();
    }

    console.log("Bought furniture:");
    if(items.length > 0){
        
        console.log(items.join("\n"));
    }
    console.log(`Total money spend: ${allPrice.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])