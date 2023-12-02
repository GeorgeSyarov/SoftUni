function solve(input) {
  let string = input.shift();
  let command = input.shift();
  while (command != "Travel") {
    let tokens = command.split(":");
    let action = tokens[0];
    switch (action) {
      case "Add Stop":
        let idx = Number(tokens[1]);
        let str = tokens[2];
        if (string[idx] != undefined) {
          let left = string.slice(0, idx);
          let rigth = string.slice(idx);
          string = left + str + rigth;
          console.log(string);
        }
        break;
      case "Remove Stop":
        let startIdx = Number(tokens[1]);
        let endIdx = Number(tokens[2]);
        let n = endIdx - startIdx;
        if (string[startIdx] != undefined && string[endIdx] != undefined) {
          let elements = string.split("");
          elements.splice(startIdx, n + 1);
          string = elements.join("");
          console.log(string);
        }
        break;
      case "Switch":
        let oldStr = tokens[1];
        let newStr = tokens[2];
        if (string.includes(oldStr)) {
          let oldIdx = string.indexOf(oldStr);
          let els = string.split("");
          els.splice(oldIdx, oldStr.length);
          els.splice(oldIdx, 0, newStr);
          string = els.join("");
          console.log(string);
        }else{
            console.log(string);
        }
        break;
    }
    command = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${string}`);
}
solve([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
