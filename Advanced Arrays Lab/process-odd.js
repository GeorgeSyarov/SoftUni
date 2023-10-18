function doubling(input) {
  let newInput = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 != 0) {
      let doubled = input[i] * 2;
      newInput.unshift(doubled);
    }
  }
  console.log(newInput.join(" "));
}
doubling([10, 15, 20, 25]);
