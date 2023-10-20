function manipulate(numbers, input) {
  for (let i = 0; i < input.length; i++) {
    let commands = input[i].split(" ");
    let index0;
    switch (commands[0]) {
      case "add":
        index0 = Number(commands[1]);
        let element = Number(commands[2]);
        add(index0, element);
        break;
      case "addMany":
        index0 = Number(commands[1]);
        let numArray = [];
        for (let a = 2; a < commands.length; a++) {
          numArray.push(Number(commands[a]));
        }
        addMany(index0, numArray);
        break;
      case "remove":
        index0 = Number(commands[1]);
        remove(index0);
        break;
      case "contains":
        index0 = Number(commands[1]);
        contains(index0);
        break;
      case "shift":
        index0 = Number(commands[1]);
        shiftPlace(index0);
        break;
      case "sumPairs":
        sumPairs(numbers);
        break;
      case "print":
        console.log(`[ ${numbers.join(', ')} ]`);
        break;
    }
  }

  function contains(index) {
    if (numbers.includes(index)) {
      console.log(numbers.indexOf(index));
    } else {
      console.log(-1);
    }
  }

  function add(index, el) {
    numbers.splice(index, 0, el);
  }
  function addMany(index, numArr) {
    for (let i = numArr.length - 1; i >= 0; i--) {
      let num = numArr[i];
      numbers.splice(index, 0, num);
    }
  }
  function remove(index) {
    numbers.splice(index, 1);
  }
  function shiftPlace(position) {
    let numss = numbers.splice(0, position);
    for (let i = 0; i < numss.length; i++) {
      numbers.push(numss[i]);
    }
  }
  function sumPairs(arr) {
    let newArray = [];
    let length = arr.length;
    if (length % 2 !== 0) {
      arr.push(0);
    }
    for (let i = 0; i < arr.length; i = i + 2) {
      let el = arr[i] + arr[i + 1];
      newArray.push(el);
    }
    arr.splice(0);
    for (let a = 0; a < newArray.length; a++) {
      arr.push(newArray[a]);
    }
    //console.log(arr);
  }
}
manipulate([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
