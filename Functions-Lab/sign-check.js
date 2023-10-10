function singCheck (num1,num2,num3){
    let result = '';
    let minuses = 0;
    let num1String = String(num1);
    let num2String =String(num2);
    let num3String = String(num3);
    for (let i = 0; i< num1String.length;i++){
        if (num1String[i] == '-'){
            minuses ++;
            break;
        }
    }
    for (let i = 0; i< num2String.length;i++){
        if (num2String[i] == '-'){
            minuses ++;
            break;
        }
    }
    for (let i = 0; i< num3String.length;i++){
        if (num3String[i] == '-'){
            minuses ++;
            break;
        }
    }
    if(minuses == 2 || minuses == 0){
        result = 'Positive';
    }else{
        result = 'Negative';
    }
    return result;
}
console.log(singCheck(-3,-4,5));
console.log(singCheck(-3,-4,-5));

