function solve(input) {
  let arena = {};
  for (let line of input) {
    if (line == "Ave Cesar") {
      break;
    } else {
      let tokens;
      if (line.includes("->")) {
        tokens = line.split(" -> ");
      } else {
        tokens = line.split(" vs ");
      }

      if (tokens.length > 2) {
        let name = tokens[0];
        let tech = tokens[1];
        let skill = Number(tokens[2]);

        if (arena.hasOwnProperty(name) == false) {
          arena[name] = {};
        }
        let gladiator = arena[name];

        if (
          gladiator.hasOwnProperty(tech) == false ||
          gladiator[tech] < skill
        ) {
          gladiator[tech] = skill;
        }
      } else {
        let [playerA, playerB] = tokens;
        let a = arena[playerA];
        let b = arena[playerB];

        if (!a || !b) {
          continue;
        }

        let techA = Object.keys(a);
        let techB = Object.keys(b);

        let match = false;

        for (let tech of techA) {
          if (techB.includes(tech)) {
            match = true;
          }
        }
        if (!match) {
          continue;
        }

        let totalA = 0;
        let totalB = 0;

        for (let skill of Object.values(a)) {
          totalA += skill;
        }
        for (let skill of Object.values(b)) {
          totalB += skill;
        }

        if (totalA > totalB) {
          delete arena[playerB];
        } else {
          delete arena[playerA];
        }
      }
    }
  }
  console.log(arena);
}
// solve([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]);

solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
