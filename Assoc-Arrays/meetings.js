function solve(input){
    let newObj = {};

    for(let item of input){
        let [day,person] = item.split(" ");
        if(newObj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            continue;
        }else{
            newObj[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(newObj);
    for(let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
// solve(['Monday Peter',
// 'Wednesday Bill',
// 'Monday Tim',
// 'Friday Tim']);

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);