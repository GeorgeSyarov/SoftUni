function solve (arr){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;
     let matches = arr[0].match(pattern);
     console.log(matches.join(", "));
    
}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
