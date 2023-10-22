function angry(prices, entry, type) {
  let leftSum = 0;
  let rigthSum = 0;
  let position;
  let leftCounter = 0;
  let rigthCounter = 0;

  
  if (type == "cheap") {
    for (let i = entry - 1; i >= 0; i--) {
      if (prices[i] < prices[entry]) {
        leftCounter++;
        leftSum += prices[i];
      }
    }
    for (let i = entry + 1; i < prices.length; i++) {
      if (prices[i] < prices[entry]) {
        rigthCounter++;
        rigthSum += prices[i];
      }
    }
    let cheapest;
    if (leftCounter == 0) {
      cheapest = rigthSum;
      position = "Right";
    } else if (rigthCounter == 0) {
      cheapest = leftSum;
      position = "Left";
    } else {
        if(leftSum == rigthSum){
            cheapest = leftSum;
            position = "Left";
        } else{

            cheapest = Math.min(leftSum, rigthSum);
            if (cheapest == leftSum) {
              position = "Left";
            } else {
              position = "Right";
            }
        }
    }

    console.log(`${position} - ${cheapest}`);
  } else if (type == "expensive") {
    for (let i = entry - 1; i >= 0; i--) {
      if (prices[i] >= prices[entry]) {
        leftCounter++;
        leftSum += prices[i];
      }
    }
    for (let i = entry + 1; i < prices.length; i++) {
      if (prices[i] >= prices[entry]) {
        rigthCounter++;
        rigthSum += prices[i];
      }
    }
    let exp;
    if(leftSum == rigthSum){
        exp = leftSum;
        position = "Left";
    }else{
        exp = Math.max(leftSum, rigthSum);
        if (exp == leftSum) {
          position = "Left";
        } else {
          position = "Right";
        }
    }
    console.log(`${position} - ${exp}`);
  }
}
angry(
  [1],

  3,

  "cheap"
);
