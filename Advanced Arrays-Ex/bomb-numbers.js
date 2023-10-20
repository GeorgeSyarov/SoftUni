function bombing(array, numbers) {
  let target = numbers[0];
  let kills = numbers[1];
  let sum = 0;

  while (array.includes(target)) {
    let index = array.indexOf(target);
    let elToRemove = kills * 2 + 1;
    let startIndex = index - kills;

    if (startIndex < 0) {
      elToRemove += startIndex;
      startIndex = 0;
    }
    array.splice(startIndex, elToRemove);
  }
  for (let el of array) {
    sum += el;
  }
  console.log(sum);
}
bombing([1, 7, 7, 1, 2, 3], [7, 1]);
