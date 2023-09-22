function round (number, precision){
    if (precision>15){
        precision = 15;
    } 
    fixed = parseFloat(number.toFixed(precision));
    console.log(fixed);
}
round(3.15484884844848, 4);