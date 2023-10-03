function gladiGame(lostFight, helmetP, swordP, shieldP, armorP) {

  let helmet = 0;
  let sword = 0;
  let shield = 0;
  let armor = 0;



  for (let i = 1; i <= lostFight; i++){ 
    if (i % 2 == 0 && i % 3 == 0) {
        helmet++;
        sword++;
        shield++;
        if (shield % 2 == 0){
            armor ++;
        }
      } else if (i % 2 == 0) {
        helmet++;
      } else if (i % 3 == 0) {
        sword++;
      }
    
  }
  
  let expenses = ((helmet*helmetP) + (sword * swordP) + (shield * shieldP) + (armor*armorP)).toFixed(2);

  /*console.log(`Trashed helmet -> ${helmet} times`);
  console.log(`Trashed sword -> ${sword} times`);
  console.log(`Trashed shield -> ${shield} times`);
  console.log(`Trashed armor -> ${armor} times`);*/

  console.log(`Gladiator expenses: ${expenses} aureus`);
}

gladiGame(7,2,3,4,5);
