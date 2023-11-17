function solve (input){
    let materials = {};
    for(let i = 0; i< input.length; i= i+ 2){
        let name = input[i];
        let qty = Number(input[i+1]);
       // console.log(`${name} = ${qty}`);

        if(materials.hasOwnProperty(name)){
            materials[name] += qty;
        } else{
            materials[name] = qty;
        }
    }
    let entries = Object.entries(materials);
    for(let kvp of entries){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );