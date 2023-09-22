function sumPrint(num1, num2){
    let sum = 0;
    let arr1 = ' ';
    for (i = num1; i <= num2; i++){
        sum += i;
        arr1 += i + " ";
    }
    console.log(arr1);
    console.log(`Sum: ${sum}`)
}
sumPrint(0, 26);