function numbers(input) {
  let nums = input.split(" ").map(Number);
  nums.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;
  for (let n of nums) {
    sum += nums[n];
    count++;
  }
  let avg = sum / count;
  let greater = nums
    .filter((num) => num > avg)
    .sort((a, b) => b - a)
    .slice(0, 5);

    if(greater.length == 0){
        console.log('No');
    }else{
        console.log(sorted.join(" "));
    }
}
numbers("-1 -2 -3 -4 -5 -6");
