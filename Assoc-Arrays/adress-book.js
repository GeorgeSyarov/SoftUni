function solve(input){

    let addBook = {};
    for(let element of input){
        let[person,address] = element.split(":");
        addBook[person] = address;
    }
    let entries = Object.entries(addBook);
    entries.sort((a,b)=>{
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });
    
    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }

}
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);