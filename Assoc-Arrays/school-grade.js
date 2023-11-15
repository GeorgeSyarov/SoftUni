function store(info){
    let map = new Map();

    for(let student of info){
        let tokens = student.split(" ");
        let name = tokens.shift();
        console.log(name);

        let result = 0;
        let counter = 0;
        for(let i of tokens){
            counter ++;
            result += Number(i);
        }

        let average = Number(result/counter);
        average = average
        console.log(average);

        if(!map.has(name)){
            map.set(name, +average)
        }else{
            let avg = map.get(name);
            let newAvg = ((avg + average)/2).toFixed(2);
            map.set(name, newAvg);
        }
    }
    for(let kvp of map){
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
}
store(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);