function solve(n){
    let isSpecialNum = false;
    for(let i=1; i<= n; i++){
        let currentNum = i;
        let sum = 0;
        while (currentNum > 0){
            sum += currentNum % 10; //добавя се последната цифра 
            currentNum = Math.trunc(currentNum/10);// премахва последната цифра от числото
        }
        let isSpecialNum = sum == 5 || sum ==7 || sum == 11;
        console.log(`${i} -> ${isSpecialNum ? 'True' : 'False'}`);
    }
}
solve(15);