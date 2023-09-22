function print(num) {
  switch (num) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
      break;
  }
}

print(2);
print(12);
print(15);

// print from 1 to 5
function solve(){
    for(let i = 1; i <=5; i++){
        console.log(i);
    }
}


//devise 3
function devisive(){
    for(let i = 3;i <=100; i++){
        if (i % 3 == 0){console.log(i);}
    }
}
devisive();