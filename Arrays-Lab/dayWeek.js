function dayOfWeek(input) {
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid day!");
        break;
    }
  }
}
dayOfWeek([1,4,6,9,11]);


function dayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
    if (day >= 1 && day <= 7){
        console.log(days[day-1]);
    } else{
        console.log('Invalid day!');
    }
}
dayOfWeek(7);