function sorting (input){
    let smallestToLargest = input.sort((a, b)=> {return a - b});
    let arr = [];


    while(smallestToLargest.length > 0){
        let maxEl = smallestToLargest.pop();
        let minEl = smallestToLargest.shift();
        arr.push(maxEl);
        arr.push(minEl);
    }
    console.log(arr.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]);
