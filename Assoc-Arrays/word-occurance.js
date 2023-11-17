function find(input){
    let map = new Map();

    for(let el of input){
        let occurence = 1;
        if(!map.has(el)){
            map.set(el, +occurence);
        }else{
            let currentOcc = map.get(el);
            let newOcc = currentOcc + 1;
            map.set(el, newOcc);
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for(let word of sorted){
        console.log(`${word[0]} -> ${word[1]} times`);
    }

}
// find(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
find(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);