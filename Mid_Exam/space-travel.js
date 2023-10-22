function space(input) {
    let commands = input[0].split("||");
    let fuel = Number(input[1]);
    let ammunition = Number(input[2]);
    
    for (let i = 0; i < commands.length; i++) {
        let token = commands[i].split(" ");
        let action = token[0];
        
        if (action == "Titan") {
            console.log("You have reached Titan, all passengers are safe.");
            return;
        }
        
        if (action == "Travel") {
            let distance = Number(token[1]);
            fuel -= distance;
            if (fuel > 0) {
                console.log(`The spaceship travelled ${distance} light-years.`);
            } else {
                console.log("Mission failed.");
                return;
            }
        } else if (action == "Enemy") {
            let enemyArmor = Number(token[1]);
            if (ammunition >= enemyArmor) {
                ammunition -= enemyArmor;
                console.log(`An enemy with ${enemyArmor} armour is defeated.`);
            } else if (ammunition < enemyArmor) {
                fuel -= enemyArmor * 2;
                if (fuel <= 0) {
                    console.log("Mission failed.");
                    return;
                } else {
                    console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
                }
            }
            if(fuel <= 0 && ammunition <= 0) {
              console.log("Mission failed.");
              return;
            }
        } else if (action == "Repair") {
        let given = Number(token[1]);
        fuel += given;
        ammunition += given * 2;
        console.log(`Ammunitions added: ${given * 2}.`);
        console.log(`Fuel added: ${given}.`);
      }
    }
  }
    /*if (action == "Titan") {
      console.log("You have reached Titan, all passengers are safe.");
      return;
    }

    if (action == "Travel") {
      let distance = Number(token[1]);
      fuel -= distance;
      if (fuel > 0) {
        console.log(`The spaceship travelled ${distance} light-years.`);
      } else {
        console.log("Mission failed.");
        return;
      }
    } else if (action == "Enemy") {
      if (fuel <= 0 || ammunition <= 0) {
        console.log("Mission failed.");
        return;
      }
      let enemyArmor = Number(token[1]);
      if (ammunition >= enemyArmor) {
        ammunition -= enemyArmor;
        console.log(`An enemy with ${enemyArmor} armour is defeated.`);
      } else if (ammunition < enemyArmor) {
        fuel -= enemyArmor * 2;
        if (fuel <= 0) {
          console.log("Mission failed.");
          return;
        } else {
          console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
        }
      }
    } else if (action == "Repair") {
      let given = Number(token[1]);
      fuel += given;
      ammunition += given * 2;
      console.log(`Ammunitions added: ${given * 2}.`);
      console.log(`Fuel added: ${given}.`);
    }*/

// space([
//   "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
//   "60",
//   "100",
// ]);

space(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
