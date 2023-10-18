function sequaence(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let a = i - k; a < i; a++) {
      if (a >= 0) {
        sum += result[a];
      }
    }
    //console.log(sum);
    let num = sum;
    result.push(num);
  }
  console.log(result.join(" "));
}

sequaence(6, 3);
