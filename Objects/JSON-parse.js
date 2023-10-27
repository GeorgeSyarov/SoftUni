function parseJ (string){
    let obj = JSON.parse(string);
    for(let [key,values] of Object.entries(obj)){
        console.log(`${key} : ${values}`);
    }
}
parseJ('{"name": "George", "age": 40, "town": "Sofia"}');