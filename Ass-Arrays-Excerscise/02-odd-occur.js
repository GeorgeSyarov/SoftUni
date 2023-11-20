function solve(input) {
  let arr = input.toLowerCase().split(" ");
  let map= new Map();

  for (let word of arr) {
    if (map.has(word)) {
      let quantity = map.get(word) + 1;
      map.set(word, quantity);
    } else {
      map.set(word, +1);
    }
  }
  let arr2 = [];
  for (let [key, value] of map) {
    if (value % 2 != 0) {
      arr2.push(key);
    }
  }

  console.log(arr2.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
