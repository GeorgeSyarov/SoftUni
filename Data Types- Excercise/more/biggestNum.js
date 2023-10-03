function biggest (a,b,c){
    let arr = [];
    arr.push(a,b,c);
    let biggestNum = Math.max(...arr);
    console.log(biggestNum);
}
biggest(1,2,3);

function binary(num){
    let number = parseInt(num, 2);
    console.log(number);
}
binary('00001001');