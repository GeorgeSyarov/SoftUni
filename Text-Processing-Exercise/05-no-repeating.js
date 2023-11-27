function repeat (str){

    let newStr = "";
    let prevChar = "";

    for(let curChar of str){
        if(curChar != prevChar){
            newStr += curChar;
            prevChar = curChar;
        }
    }
    console.log(newStr);
}
repeat('aaaaabbbbbcdddeeeedssaa');