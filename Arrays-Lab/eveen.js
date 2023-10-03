function evenNum(input){
    let even = 0;
    let odd = 0;
for(let i =0; i < input.length; i++){
    input[i] = Number(input[i]);
    if(input[i] % 2 == 0){
        even += input[i];
    }else{
        odd += input[i];
    }
    
}
let sum = even - odd;
console.log(sum);

}
evenNum(['1','4','10','15', '4', '7']);