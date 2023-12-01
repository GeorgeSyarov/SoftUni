function occure (words){
    let tokens = words.shift().split(" ");

    let map = new Map();
    for(let token =0;token< tokens.length;token++){
        map.set(tokens[token],0)
    }
    
    for(let word of words){
        if(map.has(word)){
            let occurences = map.get(word);
            let newOccurence = occurences + 1;
            map.set(word,newOccurence);
        }
    }
    let arr = Array.from(map).sort((a,b) => b[1] - a[1]);

    for(let i of arr){
        console.log(`${i[0]} - ${i[1]}`);
    }

}

occure([
    'isa thee',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    );