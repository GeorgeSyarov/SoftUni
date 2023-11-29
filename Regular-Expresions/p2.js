function solve (arr){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;
    let mathes = pattern.exec(arr);
    while(mathes == null){
        console.log(mathes[0]);
    }
}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
