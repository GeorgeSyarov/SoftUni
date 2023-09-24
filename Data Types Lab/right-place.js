function right(string, sym, string1) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "_") {
      newString += sym;
    } else {
      newString += string[i];
    }
  }
  if (newString == string1) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

right("Str_ng", "I", "Strong");
right("Str_ng", "i", "String");


//b variant

function solve(str,char,result){
    let res = str.replace('_',char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}