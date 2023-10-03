function reverse(input){
    let arr = input.reverse();
    
    let stringArr = arr.toString();
    let str = stringArr.replace(/,/g, ' ');
    console.log(str);
}
reverse([1,2,3,4,5,6]);