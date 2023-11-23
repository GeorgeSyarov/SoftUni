function solve(text, str) {
  let words = text.split(" ");

  let matches = words.filter(word => word == str);
  console.log(matches.length);
}
solve("This is a word and it also is a sentence", "is");
solve('softuni is great place for learning newprogramming languages','softuni');
