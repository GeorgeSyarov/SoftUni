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

//N to 1
function decNum(n){
  for(let a = n; a>=1; a--){
    console.log(a);
  }
}
decNum(10);

function decNumber(m, n){
  for(let a = m; a>=n; a--){
    console.log(a);
  }
}
decNumber(10, 4);

//sum of odd numbers
function sum(n){
  let total = 0;
  for (let i = 1; i<= n*2; i++){
    if(i % 2 != 0){
    console.log(i);
    total += i;
    }
  }
  console.log(`Sum: ${total}`);
}
sum(10);