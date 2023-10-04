function rotate(array,rotateCount){
    for (let rotatings = 1; rotatings <= rotateCount;rotatings++){
        let element = array.shift();
        array.push(element);
    }
    console.log(array.join(' '));
}

rotate([51, 47, 32, 61, 21], 2 )