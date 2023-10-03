function revrseArray (num, input){
    console.log(input.reverse());
let arr = [];
    for (let i = 0; i < num ; i++){
        arr.push(input[i]);
    }
    let output = '';
    for (let a = arr.length - 1; a >= 0; a-- ){
        output += `${arr[a]} `;
    }
    console.log(output);

}
revrseArray(3,[10,20,30,40,50]);