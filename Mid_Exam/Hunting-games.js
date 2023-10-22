function game(array) {
  let numArr = array.map(Number);
  let days = numArr.shift();
  let players = numArr.shift();
  let groupEnergy = numArr.shift();
  let waterPerDay = numArr.shift();
  let foodPerDay = numArr.shift();

  let water = days * players * waterPerDay;
  let food = days * players * foodPerDay;


  for (let i = 0; i < numArr.length; i++) {
    let day = i + 1;
    groupEnergy -= numArr[i];
    if (groupEnergy <= 0) {
        console.log(
          `You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`
        );
        return;
      }
    if (day % 2 === 0) {
      groupEnergy += groupEnergy * 0.05;
      water -= water * 0.3;
    }
    if (day % 3 === 0) {
      groupEnergy += groupEnergy * 0.1;
      food -= food / players;
    }
    
  }
  console.log(
    `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`
  );
}
game([
  "12",

  "6",

  "4430",

  "9.8",

  "5.5",

  "620.3",

  "840.2",

  "960.1",

  "220",

  "340",

  "674",

  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496"
]);
