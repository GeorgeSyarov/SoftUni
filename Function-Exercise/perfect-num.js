function perfectNum (n){
    let half = n/2;
    let sum = 0;
    for(let i = 1;i<=half;i++){
        if(n % i == 0 ){
            sum += i;
        }
    }
    if(sum == n){
        console.log('We have a perfect number!');
    }else{
        console.log("It's not so perfect.");
    }

}
perfectNum(1236498);