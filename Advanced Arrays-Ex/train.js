function train(input) {
  let wagoons = input
    .shift()
    .split(" ")
    .map(Number);

  let maxPassengers = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let arr1 = input[i].split(" ");
    let command = arr1[0];
    let firstNum = arr1[1];

    if (command === "Add") {
      wagoons.push(firstNum);
    } else {
      let passengers = Number(arr1[0]);
      for (let a = 0; a < wagoons.length; a++) {
        if (passengers + wagoons[a] <= maxPassengers) {
            wagoons[a] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagoons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
