function equal(input) {
  if (input.length > 1) {
    let answer = "";
    for (let i = 0; i < input.length; i++) {
      let rigthSum = 0;
      let leftSum = 0;

      if (i == 0) {
        leftSum = 0;
      } else {
        for (let k = i - 1; k >= 0; k--) {
          leftSum += input[k];
        }
      }

      for (let j = i + 1; j < input.length; j++) {
        rigthSum += input[j];
      }
      if (leftSum == rigthSum) {
        answer = i;
        break;
      } else {
        answer = "no";
      }
    }
    console.log(answer);
  } else {
    console.log(0);
  }
}
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
