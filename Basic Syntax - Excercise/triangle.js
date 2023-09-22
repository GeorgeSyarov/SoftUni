function triangle (maxRow){
    for (let num = 1; num <= maxRow; num++){
        console.log(`${num} `.repeat(num));
    }
}
triangle(10);

function triangle2(maxRow){
    for (let num=1; num <= maxRow;num++){
        let curRow = '';
        for(let count = num; count <= num; count++){
            curRow += num + " ";
        }
        console.log(curRow);
    }
}