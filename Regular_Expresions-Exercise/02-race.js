function solve(input) {
  let names = input.shift().split(", ");
  let obj = {};
  for (let name of names) {
    obj[name] = 0;
  }
  let pattern1 = /[^A-Za-z+]/g;
  let pattern2 = /\d/g;
  let command = input.shift();
  while (command != "end of race") {
    let nameChars = command.split(pattern1).join("");
    if (names.includes(nameChars)) {
      let numbers = command.match(pattern2);
      let distance = numbers.map(Number).reduce((acc, val) => acc + val);
      //console.log(distance);

      obj[nameChars] += distance;
    }

    command = input.shift();
  }

  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  let count = 0;
  let winners = [];
  for (let entry of sorted) {
    if (count < 4) {
      winners.push(entry[0]);
    } else {
      break;
    }
  }

  console.log(
    `1st place: ${winners[0]}\n2nd place: ${winners[1]}\n3rd place: ${winners[2]}`
  );
}
solve([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
