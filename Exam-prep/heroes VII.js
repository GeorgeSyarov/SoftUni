function solve(input) {
  let numberHeros = Number(input.shift());
  let obj = {};
  let heroes = [];

  for (let i = 0; i < numberHeros; i++) {
    let heroLine = input.shift();
    heroes.push(heroLine);
  }

  for (let hero of heroes) {
    let [heroName, HP, MP] = hero.split(" ");
    HP = Number(HP);
    MP = Number(MP);
    obj[heroName] = { HP, MP };
    //console.log(obj[heroName].HP);
  }

  let line = input.shift();
  while (line != "End") {
    let tokens = line.split(" - ");
    let action = tokens[0];
    let name = tokens[1];
    let points = Number(tokens[2]);

    switch (action) {
      case "CastSpell":
        let spell = tokens[3];
        let heroMp = obj[name].MP;
        if(heroMp - points >= 0){
            obj[name].MP -= points;
            console.log(`${name} has successfully cast ${spell} and now has ${obj[name].MP} MP!`);
        } else{
            console.log(`${name} does not have enough MP to cast ${spell}!`);
        }
        break;
      case "TakeDamage":
        let attacker = tokens[3];
        obj[name].HP -= points;
        if(obj[name].HP > 0){
            console.log(`${name} was hit for ${points} HP by ${attacker} and now has ${obj[name].HP} HP left!`);
        }else{
            delete obj[name];
            console.log(`${name} has been killed by ${attacker}!`);
        }
        break;
      case "Recharge":
        let res = obj[name].MP + points;
        if(res <= 200){
            obj[name].MP += points;
            console.log(`${name} recharged for ${points} MP!`);
        }else{
            if(points > 200){
                console.log(`${name} recharged for 0 MP!`);
            }else{

                let pointUsed = 200 - obj[name].MP;
                obj[name].MP = 200;
                console.log(`${name} recharged for ${pointUsed} MP!`);
            }
        }
        break;
      case "Heal":
        let res1 = (obj[name].HP) + points;
        
        if(res1 <= 100){
            obj[name].HP += points;
            console.log(`${name} healed for ${points} HP!`);
        }else{
            if(points > 100){
                console.log(`${name} healed for 0 HP!`);
            }else{

                let pointUsed1 = 100 - obj[name].HP;
                obj[name].HP = 100;
                console.log(`${name} healed for ${pointUsed1} HP!`);
            }
        } 
        break;
    }

    line = input.shift();
  }
  let entries = Object.entries(obj);
  for(let entry of entries){
    let entries1 = Object.entries(entry[1]);

    console.log(`${entry[0]}\n  ${entries1[0].join(": ")}\n  ${entries1[1].join(": ")}`);
  }
}
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Adela - 99 - Fireball',
    'TakeDamage - SirMullich - 101 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]);
