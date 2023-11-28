function fill(input) {

    let text = input[0];
    let wordArr = input[1];

    let textWords = text.split(" ");
    let missingWords = textWords.filter(x => x.includes("_"));
    
    for(let word of missingWords){
        if(!word.endsWith("_")){
            word = word.slice(0, word.length - 1)
        }
        let wordToFill = wordArr.find(x => x.length == word.length);
        text = text.replace(word, wordToFill);
    }
    
    console.log(text);

}
fill([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
