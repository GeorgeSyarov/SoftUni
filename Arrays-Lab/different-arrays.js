function compare(input, input1) {
  let sum = 0;
  let isOkey = true;
  for (let i = 0, j = 0; i < input.length && j < input1.length; i++, j++) {
    input[i] = Number(input[i]);
    input1[j] = Number(input1[j]);
    sum += input[i];
    if (input[i] !== input1[j]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isOkey = false;
      break;
    }
    
  }
  if ((isOkey)) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
compare(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
