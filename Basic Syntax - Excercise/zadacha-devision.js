function devision (num){
    let devNum = 0;
    if (num % 10 == 0){
        devNum = 10;
        console.log(`The number is divisible by ${devNum}`);
    } else if (num % 7 == 0){
        devNum = 7;
        console.log(`The number is divisible by ${devNum}`);
    }else if (num % 6 == 0){
        devNum = 6;
        console.log(`The number is divisible by ${devNum}`);
    }else if (num % 3 == 0){
        devNum = 3;
        console.log(`The number is divisible by ${devNum}`);
    }else if (num % 2 == 0){
        devNum = 2;
        console.log(`The number is divisible by ${devNum}`);
    } else {
        console.log('Not devisible');
    }
}
devision (10);
devision(30);
devision(15);