function solve(str) {
  let element = str.split("\\").pop();
  let lastDot = element.lastIndexOf(".");
  let extension = element.slice(lastDot + 1);
  let name = element.slice(0,lastDot);


  // for (let word of words) {
  //   name = name.concat(".",word);
  // }
  // let fileName = name.slice(1);

  console.log(`File name: ${name}`);
  console.log(`File extension: ${extension}`);
}
solve("C:\\Internal\\training-internal\\template.bak.pptx");
