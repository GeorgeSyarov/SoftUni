function magicSum (array,num){

    for(let i = 0; i< array.length; i++){
        let temp = [];
        let num1 = array[i];
        for(let j = 0;j< array.length && (j< i || j>i);j++ ){
            let num2 = array[j];
            let sum = num1 + num2;
            if(sum == num){
                temp.push(num2, num1);
                console.log(temp.join(' '));
            }
        }
    }
}
magicSum([14,20,60,13,7,19,8],27);