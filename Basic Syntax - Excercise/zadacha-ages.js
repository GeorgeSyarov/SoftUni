function ages(num) {
  if (num < 0) {
    console.log("out of bounds");
  } else if (num <= 2) {
    console.log("baby");
  } else if (num <= 13) {
    console.log("child");
  } else if (num <= 19) {
    console.log("teenager");
  } else if (num <= 65) {
    console.log("adult");
  } else {
    console.log("elder");
  }
}

ages(22);
ages(1);

function generatePyramid(num) {
    let output = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid(5);