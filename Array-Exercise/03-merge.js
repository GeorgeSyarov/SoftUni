function merge(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
      let sum = Number(arr1[i]) + Number(arr2[i]);
      newArr.push(sum);
    } else {
        let concetanete = arr1[i] + arr2[i];
      newArr.push(concetanete);
    }
  }
  console.log(newArr.join(" - "));
}
merge(["1", "5", "3", "4"], [1, 2, 3, 4]);
