function game(rooms){
    let health = 100;
    let bitcoins = 0;
    let element = rooms.split('|');
    //console.log(element);

    for(let i = 0;i<element.length;i++){
        let info = (element[i]).split(' ');
        let item = info[0];
        let points = Number(info[1]);
        if(item == 'potion'){
            if (health < 100) {
                health += points;
                if (health > 100) {
                  let number = health - 100;
                  health = 100;
                  console.log(`You healed for ${points - number} hp.`);
                  console.log(`Current health: ${health} hp.`);
                
                } else {
                  console.log(`You healed for ${points} hp.`);
                  console.log(`Current health: ${health} hp.`);
                }
              }else{
                  health = 100;
                  console.log(`You healed for 0 hp.`);
                  console.log(`Current health: ${health} hp.`);
                }
            } else if(item == 'chest'){
                bitcoins += points;
                console.log(`You found ${points} bitcoins.`);
                
            }else{
                health -= points;
                if(health>0){
                    console.log(`You slayed ${item}.`);
                    //break;
                }else{
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
            }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);

}
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");