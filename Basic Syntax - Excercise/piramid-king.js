function king(base, increment) {
  let area = 0;
  let stoneArea = 0;
  let stoneForStep = 0;
  let marbleForStep = 0;
  let steps = 0;
  let lapisStep = 0;
  let stones = 0;
  let lapis = 0;
  let marble = 0;
  let gold = 0;
  let stepHeigh = 0;

  for (let i = base; i >= 1; i = i - 2) {
    steps++;
    stepHeigh = steps * increment;
    area = i * i;
    if (area == 4 || area == 1) {
      gold += area;
    } else {
      stoneArea = (i - 2) * (i - 2);
      stoneForStep = stoneArea * increment;
      stones += stoneForStep;
      if (steps % 5 == 0 || steps % 10 == 0) {
        lapisStep = (area - stoneArea) * increment;
        lapis += lapisStep;
      } else {
        marbleForStep = (area - stoneArea) * increment;
        marble += marbleForStep;
      }
    } 
  } 
  console.log(`Stone required: ${Math.round(stones)}`);
  console.log(`Marble required: ${Math.round(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.round(lapis)}`);
  console.log(`Gold required: ${Math.round(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(stepHeigh)}`);
}
king(11, 0.75);

/**function king(base, increment) {
    // let area = "";
    // let stoneArea = "";
    // let stoneForStep = "";
    // let marbleForStep = "";
    // let steps = "";
    // let lapisStep = "";
 
    let stones = 0;
    let lapis = 0;
    let marble = 0;
    let gold = 0;
    let stepHeigh = 1;
 
    for (let i = base; i >= 1; i = i - 2) {
 
        if (i == 1 || i == 2) {
            gold += i * i;
            break;
        }
 
        if (stepHeigh % 5 == 0) {
 
            lapis += (i * i) - ((i - 2) * (i - 2));
 
        } else {
 
            marble += (i * i) - ((i - 2) * (i - 2));
 
        }
 
        stones += (i - 2) * (i - 2);
        stepHeigh++;
 
    }
 
    stones *= increment;
    marble *= increment;
    lapis *= increment;
    gold *= increment;
    stepHeigh *= increment;
 
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stepHeigh)}`);
} */