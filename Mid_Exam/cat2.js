function angry(prices, entry, input) {
  let number = input[entry];
  let leftcheapsum = 0;
  let rightcheapsum = 0;
  let leftexpensivesum = 0;
  let rightexpensivesum = 0;

  for (let i = 0; i < prices.Length; i++) {
    if (input == "cheap") {
      if (prices[i] < number) {
        if (i < entry) {
          leftcheapsum = leftcheapsum + prices[i];
        }
        if (i > entry) {
          rightcheapsum = rightcheapsum + prices[i];
        }
      }
    }
    if (input == "expensive") {
      if (prices[i] >= number) {
        if (i < entry) {
          leftexpensivesum = leftexpensivesum + prices[i];
        }
        if (i > entry) {
          rightexpensivesum = rightexpensivesum + prices[i];
        }
      }
    }
  }
  if (input == "cheap") {
    if (leftcheapsum >= rightcheapsum) {
      console.log(`Left - ${leftcheapsum}`);
    } else {
      console.log(`Right - ${rightcheapsum}`);
    }
  }
  if (input == "expensive") {
    if (leftexpensivesum >= rightexpensivesum) {
      console.log(`Left - ${leftexpensivesum}`);
    } else {
      console.log(`Right - ${rightexpensivesum}`);
    }
  }
}
angry(
  [1, 5, 1],

  1,

  "cheap"
);
