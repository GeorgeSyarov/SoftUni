function amazing(num){
    let sum = 0;
    let isAmazing = false; 
    let stringNum = String(num);
    for (let i=0; i < stringNum.length; i++){
        sum += Number(stringNum[i]);
    }
    let sumString = String(sum);
    for (let i = 0; i< sumString.length;i++){
        if (sumString[i] == '9'){
            isAmazing = true;
        }
        /*let result = sum.toString.includes('9');
        console.log(result ?
            `${num} Amazing? True` :
            `${num} Amazing? False`);*/
    }
    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);
}
amazing(1121);
