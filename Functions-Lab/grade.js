function grade(num){
    let mark = num.toFixed(2);
    let result = '';
    if(mark > 6.00){
        return;
    } else if(mark < 3.00){
        mark = 2;
        result += `Fail (${mark})`; 
    }else if(mark >= 3.00 && mark< 3.50){
        result += `Poor (${mark})`;
    }else if(mark >= 3.50 && mark < 4.50){
        result += `Good (${mark})`;
    } else if(mark >=4.50 && mark < 5.50){
        result += `Very good (${mark})`;
    }else{
        result += `Excellent (${mark})`
    }
    console.log(result);

}

grade(4.59);