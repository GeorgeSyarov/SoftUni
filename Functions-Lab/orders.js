function order(item, quantity) {
  let result = 0.00;
  switch (item) {
    case "water":
      result += 1.00 * quantity;
      break;
    case "coffee":
      result += 1.50 * quantity;
      break;
    case "coke":
      result += 1.40 * quantity;
      break;
    case "snacks":
      result += 2.00 * quantity;
      break;
      default:
        break;
  }
  console.log(result.toFixed(2));
}

order('coffee', 5);