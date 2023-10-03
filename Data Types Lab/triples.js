function triple(n) {
let number = Number(n);
  for (i = 0; i <= number; i++) {
    let letterOne = String.fromCharCode(97 + i);
    for (j = 0; j <= number; j++) {
        let letterTwo = String.fromCharCode(97 + j);
      for (k = 0; k <= number; k++) {
        let letterThree = String.fromCharCode(97 + k);
        console.log(`${letterOne}${letterTwo}${letterThree}`);
      }
    }
  }
}
triple(3);
