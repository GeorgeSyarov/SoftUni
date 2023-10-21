function war(input) {
  let pirateShip = input[0].split(">").map(Number);
  let warship = input[1].split(">").map(Number);
  let maxHealth = Number(input[2]);
  //console.log(pirateShip, warship);
  let neededHealth = maxHealth * 0.2;

  for (let el = 3; el < input.length; el++) {
    let current = input[el].split(" ");
    let action = current[0];
    let idx = Number(current[1]);
    let power = Number(current[2]);
    switch (action) {
      case "Fire":
        fire(idx, power);
        break;
      case "Defend":
        let idx0 = Number(current[2]);
        power = current[3];
        defend(idx, idx0, power);
        break;
      case "Repair":
        repair(idx, power);
        break;
      case "Status":
          let counter = 0;
        for (let a = 0; a < pirateShip.length; a++) {
          if (pirateShip[a] < neededHealth) {
            counter++;
          }
        }
        console.log(`${counter} sections need repair.`);
        break;
      case "Retire":
        let sum1 = 0;
        let sum2 = 0;
        for (let el of pirateShip) {
          sum1 += el;
        }
        for (let el of warship) {
          sum2 += el;
        }
        console.log(`Pirate ship status: ${sum1}\nWarship status: ${sum2}`);
        break;
    }
  }

  function fire(index, points) {
    if (warship.length > index) {
      warship[index] -= points;
    }
    if (warship[index] <= 0) {
      console.log("You won! The enemy ship has sunken.");
      return;
    }
  }

  function defend(index1, index2, points) {
    if (
      index1 >= 0 &&
      index1 < pirateShip.length &&
      index2 > index1 &&
      index2 < pirateShip.length
    ) {
      for (let i = index1; i <= index2; i++) {
        pirateShip[i] -= points;
        if (pirateShip[i] <= 0) {
          console.log(`You lost! The pirate ship has sunken.`);
          return;
        }
      }
    }
  }

  function repair(index, points) {
    if (index >= 0 && index < pirateShip.length) {
      pirateShip[index] += points;
      if (pirateShip[index] > maxHealth) {
        let n = pirateShip[index] - maxHealth;
        pirateShip[index] -= n;
      }
    }
  }
}

war([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
