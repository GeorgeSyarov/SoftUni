function substract(input){
    let sum = 0;
    let sumB = 0
    for(let i = 0; i < input.length;i++){
        sum += Number(input[i]);
        if (Number(input[i]) % 2 == 0){
            input[i] += i;
        }else{
            input[i] -= i;
        }
        sumB += Number(input[i]);
    }
    console.log(input);
    console.log(sum);
    console.log(sumB);
}

substract([5, 15, 23, 56, 35]);