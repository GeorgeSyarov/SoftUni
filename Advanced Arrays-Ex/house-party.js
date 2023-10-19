function list(info) {
  let guests = [];

  for (let i = 0; i < info.length; i++) {
    let stateForPerson = info[i].split(" ");

    if (stateForPerson.includes("not") && stateForPerson.includes("going!")) {
      if (guests.includes(stateForPerson[0])) {
        guests.splice(guests.indexOf(stateForPerson[0]), 1);
      } else {
        console.log((`${stateForPerson[0]} is not in the list!`));
      }
    } else if (stateForPerson.includes("going!")) {
      if (guests.includes(stateForPerson[0])) {
        console.log((`${stateForPerson[0]} is already in the list!`));
      } else {
        guests.push(stateForPerson[0]);
      }
    }
  }
  console.log(guests.join("\n"));
}
list(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);