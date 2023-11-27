function solve (str){
    let words = str.split((/[A-Z]/));
    words.shift();
    let obj = [];
    for(let char = 0; char < str.length;char++){
        
        if(str.charCodeAt(char) > 64 && str.charCodeAt(char) < 91){
            let newWord = words.shift();
            newWord = str[char] + newWord;
            obj.push(newWord);
            
        }
    }
    console.log(obj.join(', '));
}
solve('HoldTheDoor');
