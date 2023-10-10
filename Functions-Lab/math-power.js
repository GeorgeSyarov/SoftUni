function mathPower (num, exponential){
    let result = 1;
    for(let i = 0; i < exponential; i++){
        result *= num;
    }
    console.log(result);
}
mathPower(2,8);