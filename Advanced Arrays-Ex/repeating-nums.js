function chekRep (array){
    for(let i =0; i< array.length;i++){
        let counter = 0;
        counter++;
        for(let j = 0; j< array.length;j++){
            if(array[i] == array[j]){
                counter++;
                if(counter > 2){
                array.splice(j,1);
                }
            }
        }
    }
    console.log(array.join(' '));
}
chekRep([7, 8, 9, 7, 2, 3,
    4, 1, 2]);

    function removeDub(arr){
        let filtrated = arr.filter((item,index) => arr.indexOf(item) === index);
        return filtrated.join(' ')
    }
    console.log(removeDub([20, 8, 12, 13, 4, 4, 8, 5]));