function palindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arr1 = "";
    let arr2 = "";
    let stringNum = String(arr[i]);
    for (let j = 0; j < stringNum.length; j++) {
      arr1 += stringNum[j];
    }
    for (let j = stringNum.length - 1; j >= 0; j--) {
      arr2 += stringNum[j];
    }
    if (arr1 == arr2) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindrome([123, 323, 421, 121]);
