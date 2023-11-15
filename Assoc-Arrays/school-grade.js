function store(info) {
  let students = {};

  for (let student of info) {
    let tokens = student.split(" ");
    let name = tokens.shift();

    let result = 0;
    let counter = 0;
    for (let i of tokens) {
      counter++;
      result += Number(i);
    }
    counter = counter;
    result = result;

    let average = (result / counter).toFixed(2);

    if (students.hasOwnProperty(name)) {
      let oldAvg = students[name];
      let newAvg = ((Number(oldAvg) + Number(average)) / 2).toFixed(2);
      students[name] = newAvg;
    } else {
      students[name] = average;
    }
  }

  let entries = Object.entries(students);
  entries.sort((a, b) => {
    let keyA = a[0];
    let keyB = b[0];
    return keyA.localeCompare(keyB);
  });
  for (let kvp of entries) {
    console.log(`${kvp[0]}: ${kvp[1]}`);
  }
}
store(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);
