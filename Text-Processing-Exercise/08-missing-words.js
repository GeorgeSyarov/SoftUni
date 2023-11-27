function fill(input) {

    let text = input[0];
    let missingW = input[1];

    let textWords = text.split(" ");
    let missingWords = textWords.filter(x => x.includes("_"))
    
    for(let word of missingW){
        let x = word.length;
        let wordX = "_".repeat(x);
        if(text.includes(wordX)){
            text = text.replace(wordX,word);
        }
    }

    console.log(text);

}
fill([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
