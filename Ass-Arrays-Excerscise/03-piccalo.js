function park(input){
    let obj = {};

    for(let car of input){
        let [status, plate] = car.split(", ");
        if(status == 'IN' || status == "OUT"){
            obj[plate] = status;
        }
    }
    let entries = Object.entries(obj);
    let arr = []
    for(let el of entries){
        if(el[1] == 'IN'){
            arr.push(el[0]);
        }
    }
    if(arr.length > 0){
        let sorted = arr.sort();
        console.log(sorted.join("\n"));
    }else{
        console.log("Parking Lot is Empty");
    }
}
park(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);