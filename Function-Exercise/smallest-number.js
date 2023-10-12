function smallestNum (a,b,c){
    let arr = [];
    arr.push(a,b,c);
    let smallest = Math.min(...arr);
    return smallest;
}
smallestNum(1,2,3);