function solve (input){
    let phoneBook = {};
    for(let element of input){
        let [name,phone] = element.split(" ");
        phoneBook[name] = phone;
        // console.log(name,"->",phone);
    }
    let entries = Object.entries(phoneBook);
    for(let entry of entries){
        console.log(entry[0],"->",entry[1]);
    }
}

solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);