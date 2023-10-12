function validator(input){
    let numCounter = 0;
    let check1 = true;
    let check2 = true;
    let check3 =true;
    if(input.length < 6 || input.length > 10){
        console.log('Password must be between 6 and 10 characters');
        check1 = false;
    }
    for(let i = 0;i< input.length;i++){
        let code = input.charCodeAt(i);
        if((code<65 && code>57 ) || (code>90 && code<97) || (code<48)){
            console.log('Password must consist only of letters and digits');
            check2 = false;
            break;
        }
        if(code>=48 && code<=57){
            numCounter++;
        }
    }
    if(numCounter < 2){
        console.log('Password must have at least 2 digits');
        check3 = false;
    }
    if(check1 && check2 && check3){
        console.log('Password is valid');
    }
}

validator ('MyPass123');