function maxNumber(arr) {
  let newArray = [];
 
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTop = true;

        for(let j = i +1; j < arr.length;j++){
            let rightNum = arr[j];
            if (rightNum >= num){
                isTop = false;
                break;
            }
        }
        if (isTop){
            newArray.push(num)
        }
    }
  
  console.log(newArray.join(' '));
}
maxNumber([6, 9, 1, 5]);
