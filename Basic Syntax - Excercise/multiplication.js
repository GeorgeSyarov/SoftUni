function multiplication(num){
    let product = '';
    let times = '';
    for (i = 1; i <=10; i++){
        times = i;
        product = num * times;
        console.log(`${num} X ${times} = ${product}`)
    }
}

multiplication(5);