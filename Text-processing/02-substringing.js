function solve (word,start,count){
    let sub;
    let end = start + count;
    sub = word.substring(start,end);
    console.log(sub);
}
solve('SkipWord', 4, 6 );