function vacation(group, type, day) {
  let sum = 0;
  let price = 0;
  if (type == "Students") {
    switch (day) {
      case "Friday":
        price = 8.45;
        sum = group * price;
        break;
      case "Saturday":
        price = 9.80;
        sum = group * price;
        break;
      case "Sunday":
        price = 10.46;
        sum = group * price;
        break;
    }
    if (group>= 30){
        sum = sum - (sum * 0.15);
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
  } else if (type == "Business") {
    switch (day) {
      case "Friday":
        price = 10.90;
        sum = group * price;
        break;
      case "Saturday":
        price = 15.60;
        sum = group * price;
        break;
      case "Sunday":
        price = 16;
        sum = group * price;
        break;
    }
    if (group>= 100){
        sum = sum - (10*price);
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
  }
  if (type == "Regular") {
    switch (day) {
      case "Friday":
        price = 15;
        sum = group * price;
        break;
      case "Saturday":
        price = 20;
        sum = group * price;
        break;
      case "Sunday":
        price = 22.50;
        sum = group * price;
        break;
    }
    if (group>= 10 && group <= 20){
        sum = sum - (sum * 0.05);
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
  }
}
vacation(30, "Students", "Sunday");
