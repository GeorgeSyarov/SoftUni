function reveal(words,text){

    let tokens = words.split(", ");

    for(let word of tokens){
        let times = word.length;
        let starsign = "*".repeat(times);
        if(text.includes(starsign)){
            text = text.replace(starsign, word);
        }
    }
    console.log(text);
    
}
reveal('great',
'softuni is ***** place for learning new programming languages');
// reveal('great, learning',
// 'softuni is ***** place for ******** new programming languages');