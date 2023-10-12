function sum(num){
let string = String(num);
let evenSum = 0;
let oddSum = 0;

    for(let i = 0; i< string.length; i++){
        let convertNum = Number(string[i]);
        if(convertNum % 2 == 0){
            evenSum += convertNum;
        }else{
            oddSum += convertNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sum(1000435);