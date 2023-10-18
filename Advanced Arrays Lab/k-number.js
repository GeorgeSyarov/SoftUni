function kNumb (arr){
    let k = arr.shift();
    let newArr = arr.slice(0,k);
    let newArr1 = arr.slice(-k);
    console.log(newArr.join(' '));
    console.log(newArr1.join(' '));

}
kNumb([2,7, 8, 9]);