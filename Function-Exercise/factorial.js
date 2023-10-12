function devision(num1,num2){
    
    let a = factorial(num1);
    let b = factorial(num2);
    let devision = (a/b).toFixed(2);
    return devision;
    
    function factorial(n){
        let sum = 1;
        for(let i = n; i>=1;i--){
            sum *= i;
        }
        return sum;
    }
}

console.log(devision(5,2));