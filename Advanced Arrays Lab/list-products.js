function list (input){
    let sortedList = input.sort();
    for(let i = 0; i<sortedList.length;i++){
        let result = `${i+1}.${sortedList[i]}`;
        console.log(result);
    }
}
list(['Potatoes', 'Tomatoes', 'Onions','Apples']);