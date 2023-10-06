function game(elements) {
  let health = 100;
  let money = 0;
  let string = String(elements[0]);
  let element = string.split("|");
  //console.log(element);
  // console.log(string);
  for (let i = 0; i < element.length; i++) {
    let room = String(element[i]);
    let temp = room.split(" ");
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == "potion") {
        if (health < 100) {
          health += Number(temp[j + 1]);
          if (health > 100) {
            let number = health - 100;
            health = 100;
            console.log(`You healed for ${temp[j + 1] - number} hp.`);
            console.log(`Current health: ${health} hp.`);
            break;
          } else {
            console.log(`You healed for ${temp[j + 1]} hp.`);
            console.log(`Current health: ${health} hp.`);
            break;
          }
        }else{
            health = 100;
            console.log(`You healed for 0 hp.`);
            console.log(`Current health: ${health} hp.`);
            break;
        }
      } else if (temp[j] == "chest") {
        console.log(`You found ${temp[j + 1]} coins.`);
        money += Number(temp[j + 1]);
        break;
      } else if (typeof temp[j] === "string") {
        health -= Number(temp[j + 1]);
        if (health <= 0) {
          console.log(`You died! Killed by ${temp[j]}.`);
          console.log(`Best room: ${i + 1}`);
          return;
        } else {
          console.log(`You slayed ${temp[j]}.`);
        }
        break;
      }
    }
  }
  console.log(`You've made it!\nCoins: ${money}\nHealth: ${health}`);
}
game(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
