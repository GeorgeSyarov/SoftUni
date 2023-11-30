function income(input){

    let pattern = /%\b(?<costumer>[A-Z][a-z]+)\b%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let endPrice = 0;
    let row = input.shift();
    while(row != 'end of shift'){
            let match = row.match(pattern);
            if(match){

                let {costumer,product,count,price} = match.groups;
                let totalPrice = Number(count) * Number(price);
                console.log(`${costumer}: ${product} - ${totalPrice.toFixed(2)}`); 
                endPrice += totalPrice;
            }
        
        row = input.shift();
    }
    console.log(`Total income: ${endPrice.toFixed(2)}`);
}

income(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);