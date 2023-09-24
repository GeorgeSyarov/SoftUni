function intNum(a, b, c) {
  let sum = a + b + c;
  let sumString = String(sum);
  let isFloat = false;
  for (let i = 0; i < sumString.length; i++) {
    if (sumString[i] == ".") {
      isFloat = true;
    }
  }
  console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
intNum(9, 100, 1.1);
intNum(1, 2, 3);
