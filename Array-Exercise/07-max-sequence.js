function sequence(arr) {
  let longestSequence = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let current = [num];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];

      if (num == nextNum) {
        current.push(nextNum);
      } else {
        break;
      }
    }
    if (current.length > longestSequence.length) {
      longestSequence = current;
    }
  }
  console.log(longestSequence.join(" "));
}
sequence([1, 1, 1, 2, 3, 4, 5, 5]);
