function reversing(input){

    let word1 = input.slice(0, input.length/2);
    let word2 = input.slice(input.length/2, input.length);

   let reversed1 = '';
    for(let i = word1.length - 1; i >= 0; i--){
        reversed1 += word1[i];
    }
    console.log(reversed1);
    let reversed2 = '';
    for(let i = word2.length - 1; i >= 0; i--){
        reversed2 += word2[i];
    }
    console.log(reversed2);
}

reversing('tluciffiDsIsihTgnizamAoSsIsihT');