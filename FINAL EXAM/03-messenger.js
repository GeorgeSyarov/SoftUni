function solve(input) {
  let capacity = Number(input.shift());
    let records = {};
  let commands = input.shift();

  while (commands != "Statistics") {
    let tokens = commands.split("=");
    let action = tokens[0];

    switch (action) {
      case "Add":
        let username = tokens[1];
        let sent = Number(tokens[2]);
        let recieved = Number(tokens[3]);
        if(records.hasOwnProperty(username)){
            continue;
        }else{
            records[username] = {sent,recieved};
        }
        break;
      case "Message":
        let sender = tokens[1];
        let reciever = tokens[2];
        if(records.hasOwnProperty(sender) && records.hasOwnProperty(reciever)){
            records[sender].sent += 1;
            if(records[sender].sent + records[sender].recieved >= capacity){
                console.log(`${sender} reached the capacity!`);
                delete records[sender];

            }
            records[reciever].recieved += 1;
            if(records[reciever].sent + records[reciever].recieved >= capacity){
                console.log(`${reciever} reached the capacity!`);
                delete records[reciever];
            }
        }
        break;
      case "Empty":
        let name = tokens[1];
        if(name != "All"){
            delete records[name];
        }else{
            for(let key in records){
                delete records[key];
            }
        }
        break;
    }
    commands = input.shift();
  }
  let userCount = 0;
  let entries = Object.entries(records);
  let arr = [];
  for(let entry of entries){
    userCount ++;
    let xy = Object.values(entry[1]);
    let msgs = xy[0] + xy[1];

    arr.push(`${entry[0]} - ${msgs}`);
  }
  console.log(`User count: ${userCount}`);
  console.log(arr.join("\n"));
}
// solve([
//   "10",

//   "Add=Berg=9=0",

//   "Add=Kevin=0=0",

//   "Message=Berg=Kevin",

//   "Add=Mark=5=4",

//   "Statistics",
// ]);

solve([
  "20",

  "Add=Mark=3=9",

  "Add=Berry=5=5",

  "Add=Clark=4=0",

  "Empty=Berry",

  "Add=Blake=9=3",

  "Add=Michael=3=9",

  "Add=Amy=9=9",

  "Message=Blake=Amy",

  "Message=Michael=Amy",

  "Statistics",
]);

// solve([
//   "12",

//   "Add=Bonnie=3=5",

//   "Add=Johny=4=4",

//   "Empty=All",

//   "Add=Bonnie=3=3",
//   "Statistics",
// ]);
