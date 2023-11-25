function subString(word,text){
    text = text.toLowerCase();

    let arr = text.split(" ");

    for(let w of arr){
        if(w == word){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
subString('javascript',
'JavaScript is the best programming language');
