function sumSubstract(num1,num2,num3){
    //if u use arrow func u must declare it before to use it >>
    let sum = (num1,num2) => num1 + num2;
    
    let result = sum(num1,num2);
    let finalRes = substract(result,num3);
    console.log(finalRes);

    
    function substract (num1,num2){
        return num1 - num2;
    }

}

sumSubstract(23,6,10);

