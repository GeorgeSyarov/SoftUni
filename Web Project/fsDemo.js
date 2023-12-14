let fs  = require('fs');


let date1 = JSON.parse(fs.readFileSync('./data.json'));
let data = fs.readFileSync('./output.txt');
let  newPerson = {
    name: 'Gosho',
    age: 21
}

fs.writeFileSync('./data.json', JSON.stringify(newPerson))
console.log(date1);