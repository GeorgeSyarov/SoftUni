function solve(input) {
  let n = Number(input.shift());
  let obj = {};
  let heroes = [];

  for (let i = 0; i < n; i++) {
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

    switch (action) {
      case "CastSpell":
        let mpCost = Number(tokens[2]);
        let spell = tokens[3];
        let heroMp = obj[name].MP;
        if(heroMp >= mpCost){
            obj[name].MP -= mpCost;
            console.log(`${name} has successfully cast ${spell} and now has ${obj[name].MP} MP!`);
        } else{
            console.log(`${name} does not have enough MP to cast ${spell}!`);
        }
        break;
      case "TakeDamage":
        let damage = Number(tokens[2]);
        let attacker = tokens[3];
        obj[name].HP -= damage;
        if(obj[name].HP > 0){
            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${obj[name].HP} HP left!`);
        }else{
            console.log(`${name} has been killed by ${attacker}!`);
            delete obj[name];
        }
        break;
      case "Recharge":
          let mpToRestore = Number(tokens[2])
          let res = obj[name].MP + mpToRestore;
        if(res > 200){
            mpToRestore = 200 - obj[name].MP;
        }
            obj[name].MP += mpToRestore;
            console.log(`${name} recharged for ${mpToRestore} MP!`);
            
        break;
      case "Heal":
        let hpToRestore = Number(tokens[2]);
        let res1 = (obj[name].HP) + hpToRestore;
        
        if(res1 > 100){
            hpToRestore = 100 - obj[name].HP;
        }
        obj[name].HP += hpToRestore;
        console.log(`${name} healed for ${hpToRestore} HP!`);
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
