function condense(num) {
  while (num.length > 1) {
    let temp = Array(num.length - 1);
    for (let i = 0; i < num.length - 1; i++) {
      temp[i] = Number(num[i]) + Number(num[i + 1]);
    }
    num = temp;
    
  }
  console.log(num[0]);
}
condense([1, 2, 3, 4]); 
