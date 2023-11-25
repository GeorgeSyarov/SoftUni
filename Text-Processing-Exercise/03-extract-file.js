function solve(str) {
  let elements = str.split("\\");

  let lastEl = elements.pop();
  let words = lastEl.split(".");
  let extension = words.pop();
  let name = '';
  for (let word of words) {
    name = name.concat(".",word);
  }
  let fileName = name.slice(1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
solve("C:\\Internal\\training-internal\\template.bak.pptx");
