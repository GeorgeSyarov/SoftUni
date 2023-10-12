//когато искаме да видим аски кода на даден символ използваме char.charCodeAt(poziciqta na bukvata ot dadeniq string(naprimer abb - 0 e a, 1 e b));
//String.fromCharCode() - прави обратното нещо

function range(char1,char2){
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();
    let smallest = Math.min(code1,code2);
    let biggest = Math.max(code1,code2);
    let arr = [];
    for(let i = smallest + 1; i< biggest;i++){
        let character = String.fromCharCode(i);
        arr.push(character);
    }
    console.log(arr.join(' '));
}
range('#',':');