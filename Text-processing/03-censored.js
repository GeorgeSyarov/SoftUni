function solve(text, word){
    let censored = "*".repeat(word.length);
    let result = text;

    while(result.includes(word)){
        result = result.replace(word,censored);
    }
    console.log(result);
}
solve('A small sentence with some words',
'small'
);