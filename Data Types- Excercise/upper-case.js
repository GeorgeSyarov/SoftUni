function lowerUpper(char){
    let code = char.charCodeAt();
    //console.log(code);

    if (code >= 65 && code <= 90){
        console.log('upper-case');
    } else{
        console.log('lower-case');
    }
}
lowerUpper('L');
lowerUpper('G');
lowerUpper('b');

//hints
//char.toUpperCase()