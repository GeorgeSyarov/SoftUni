function solve(input) {
  let message = input.shift();

  let command = input.shift();
  while (command != "Finish") {
    let tokens = command.split(" ");
    let action = tokens[0];
    switch (action) {
      case "Replace":
        let currentChar = tokens[1];
        let newChar = tokens[2];

        while(message.includes(currentChar)){
            message = message.replace(currentChar,newChar);
        }
        console.log(message);
        break;
      case "Cut":
        let startIdx = Number(tokens[1]);
        let endIdx = Number(tokens[2]);
        if (message[startIdx] == undefined || message[endIdx] == undefined){
            console.log("Invalid indices!");
        }else{
            let el = message.split("");
            el.splice(startIdx,endIdx);
            message = el.join("");
            console.log(message);
        }
        break;
      case "Make":
        let x = tokens[1];
        if(x == "Upper"){
            message = message.toUpperCase();
        }else{
            message = message.toLowerCase();
        }
        console.log(message);
        break;
      case "Check":
        let string = tokens[1];
        if(message.includes(string)){
            console.log(`Message contains ${string}`);
        }else{
            console.log(`Message doesn't contain ${string}`);
        }
        break;
      case "Sum":
        let start = Number(tokens[1]);
        let end = Number(tokens[2]);
        if (start < 0 || start >= message.length || end < 0 || end >= message.length || start > end){
            console.log("Invalid indices!");
        }else{
            let substring = message.slice(start,end+1);
            let sum = 0;
            for(let i = 0; i< substring.length; i++){
                let code = substring.charCodeAt(i);
                sum += code;
            }
            console.log(sum);
        }
        break;
    }
    command = input.shift();
  }
}
solve([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 10 4",
  "Cut 1 4",
  "Finish",
]);
// solve([
//   "HappyNameDay",
//   "Replace p r",
//   "Make Lower",
//   "Cut 2 23",
//   "Sum -2 -2",
//   "Finish",
// ]);
