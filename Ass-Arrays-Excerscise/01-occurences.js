function occure (words){
    let [firstWord, secondWord] = words.shift().split(" ");

    let map = new Map();
    map.set(firstWord, +0);
    map.set(secondWord, +0);


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
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    );