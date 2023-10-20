function sorting(input) {
  let alphabethic = input.sort();
  let sortedByLength = alphabethic.sort((a, b) => a.length - b.length);//2nd option - a.localeCompare(b)
  console.log(sortedByLength.join('\n'));
}

sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
