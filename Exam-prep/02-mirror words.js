function solve (input){
    let pattern = /(?<sep>[@#])(?<firstW>[A-Za-z]{3,})\k<sep>\k<sep>(?<secondW>[A-Za-z]{3,})\k<sep>/g
    let matches = input[0].match(pattern);
    if(matches != null){

        console.log(`${matches.length} word pair found!`);
        let mirrorWords = [];
        let pairs = matches.shift();
        while(pairs != undefined){
            let words = [];
            if(pairs.includes('#')){
                words = pairs.split("#");
            }else if (pairs.includes("@")){
                words = pairs.split("@");
            }
            let firstWord = words[1];
            let secondWord = words[3]
            let secondWordM= secondWord.split("").reverse().join("");
            let mirrorPair = "";
            if(firstWord == secondWordM){
                mirrorPair += `${firstWord} <=> ${secondWord}`
                mirrorWords.push(mirrorPair);
            }
    
            pairs = matches.shift();
        }
        if(mirrorWords.length < 1){
            console.log("No mirror words!");

        }else{
            
            console.log(`The mirror words are:\n${mirrorWords.join(", ")}`);
        }
    }else{
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r	'
    ]
    );