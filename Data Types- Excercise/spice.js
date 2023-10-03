function spice(yield) {
  let days = 0;
  let dailyYield = 0;
  let sum = 0;

  while (yield >= 100) {
      days++;
      dailyYield = yield - 26;
      yield -= 10;
      sum += dailyYield;
    }
    if (dailyYield >= 26) {
        sum = sum - 26;
    } 
  

  console.log(days);
  console.log(sum);
}

spice(111);
