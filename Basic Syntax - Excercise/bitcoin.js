function bitcoin(numbers){
let day = 0;
let gramGold = 67.51;
let oneBitcoin = 11946.16;
let countBitcoin = 0;
let boughtBitcoin = 0;
let sumBitcoins = 0;
let firstDay = 0;
let totalSum = 0;

for (let i = 0; i < numbers.length; i++){
    day++;
    let miningDay = numbers[i];
    if (day % 3 == 0 ){
        miningDay = miningDay * 0.7;
    } 
    let singleDayMoney = miningDay * gramGold;
    totalSum += singleDayMoney;

    if (totalSum >= oneBitcoin){
        countBitcoin++;
        boughtBitcoin = Math.floor(totalSum/oneBitcoin);
        totalSum = totalSum - (bitcoin * boughtBitcoin);
        sumBitcoins += boughtBitcoin;
    }
    if (countBitcoin == 1){
        firstDay = day;
    }
} 
console.log(`Bought bitcoins: ${sumBitcoins}`);
if (firstDay != 0){
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
}
console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
bitcoin([200, 200,100]);


/**function bitcoinMining(array) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let totalSum = 0;
    let day = 0;
    let firstDay = 0
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let sumBitcoins = 0;
 
 
    for (let index = 0; index < array.length; index++) {
        day++;
        let element = array[index];
        if (day % 3 == 0) {
            element = element * 0.7;
        }
        let singleDayEarning = element * gold;
        totalSum += singleDayEarning;
 
 
        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoin == 1) {
            firstDay = day;
        }
    }
 
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
 
} */