function solve(input) {
  let message = input.shift();

  let command = input.shift();

  while (command != "Reveal") {
    let tokens = command.split(":|:");
    let operation = tokens[0];

    switch (operation) {
      case "InsertSpace":
        let index  = Number(tokens[1]);
        let left = message.slice(0, index);
        let rigth = message.slice(index);
        message = left + " " + rigth;
        console.log(message);
        break;
      case "Reverse":
        let substring = tokens[1];

        if(message.includes(substring)){
            let firstIndex = message.indexOf(substring);
            let elements = message.split("");
            let part = elements.splice(firstIndex, substring.length);
            part.reverse();
            message = elements.join("") + part.join("");
            console.log(message);
        }else{
            console.log("error");
        }
        break;
      case "ChangeAll":
        let oldWord = tokens[1];
        let newWord = tokens[2];

        let elements = message.split(oldWord);
        message = elements.join(newWord);
        console.log(message);
        break;
    }

    command = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
