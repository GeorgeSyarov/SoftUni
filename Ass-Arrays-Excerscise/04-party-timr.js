function party(list) {
  let guests = list.splice(0, list.indexOf("PARTY"));
  list.splice(0, 1);
  let vip = [];
  let reg = [];

  for (let guest of guests) {
    let ascii = guest.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
      vip.push(guest);
    } else {
      reg.push(guest);
    }
  }

  for (let guest of list) {
    if (vip.includes(guest)) {
      vip.splice(vip.indexOf(guest), 1);
    } else if (reg.includes(guest)) {
      reg.splice(reg.indexOf(guest, 1));
    }
  }

  console.log(vip.length + reg.length);
  vip.forEach((x) => console.log(x));
  reg.forEach((x) => console.log(x));
  
}
party([
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
