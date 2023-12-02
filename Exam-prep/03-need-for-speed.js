function speed(input) {
  let cars = {};
  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let line = input.shift();
    let [car, mileage, fuel] = line.split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);
    cars[car] = { mileage, fuel };
  }
  let command = input.shift();
  while (command != "Stop") {
    let tokens = command.split(" : ");
    let action = tokens[0];
    let car = tokens[1];

    if(car in cars){

        switch (action) {
          case "Drive":
            let distance = Number(tokens[2]);
            let neededFuel = Number(tokens[3]);
            
            if(cars[car].fuel >= neededFuel){
                cars[car].mileage += distance;
                cars[car].fuel -= neededFuel;
                console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
                if(cars[car].mileage > 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }else{
                console.log("Not enough fuel to make that ride");
            }
            break;
          case "Refuel":
            let givenFuel = Number(tokens[2]);
            if(cars[car].fuel + givenFuel <= 75){
                cars[car].fuel += givenFuel;
            }else{
                givenFuel = 75 - cars[car].fuel; 
                cars[car].fuel += givenFuel;
            }
            console.log(`${car} refueled with ${givenFuel} liters`);
            break;
          case "Revert":
            let kilometers = Number(tokens[2]);
            cars[car].mileage -= kilometers;
            if(cars[car].mileage >= 10000){
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }else{
                cars[car].mileage = 10000;
            }
            break;
        }
    }
    command = input.shift();
  }
  let enries = Object.entries(cars);
  for(let car of enries){
    let entries1 = Object.entries(car[1]);
    console.log(`${car[0]} -> Mileage: ${entries1[0][1]} kms, Fuel in the tank: ${entries1[1][1]} lt.`);
  }

}
speed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
