function search(numbers,adds){
let newArr = [];
let newLength = adds[0];
let delEl = adds[1];
let target = adds[2];
let caunter =0;

for(let i=0;i<newLength;i++){
    newArr.push(numbers[i]);
}
for(let i=0;i<delEl;i++){
    newArr.shift();
}
for(let i=0;i<newArr.length;i++){
    if(newArr[i] == target){
        caunter++;
    }
}
console.log(`Number ${target} occurs ${caunter} times.`);

}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);