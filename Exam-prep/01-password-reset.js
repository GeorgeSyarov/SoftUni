function reset(input) {
  let pass = input.shift();

  let command = input.shift();
  while (command != "Done") {
    let tokens = command.split(" ");
    let action = tokens.shift();
    switch (action) {

      case "TakeOdd":
        let letters = pass.split("");
        let oddLetters = [];
        for(let i = 0; i < letters.length; i++ ){
            if(i % 2 != 0){
                oddLetters.push(letters[i]);
            }
        }
        pass = oddLetters.join("");
        console.log(pass);
        break;

      case "Cut":
        let index = Number(tokens[0]);
        let length = Number(tokens[1]);

        let words = pass.split("");
        words.splice(index,length);
        pass = words.join("");
        console.log(pass);
        break;
      case "Substitute":
        let oldS = tokens[0];
        let newS = tokens[1];
        
        if(pass.includes(oldS)){

            let arr = pass.split(oldS);
            pass = arr.join(newS);
            console.log(pass);
        }else{
            console.log("Nothing to replace!");
        }
        break;
    }
    command = input.shift();
  }
  console.log(`Your password is: ${pass}`);
}

reset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
;
