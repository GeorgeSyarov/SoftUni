function cone(radius, height){
    let volume = (1/3)*Math.PI*(radius ** 2)*height;
    //console.log(volume.toFixed(4));

    let area = Math.PI*radius*(radius + Math.sqrt(radius ** 2 + height ** 2));
   // console.log(area.toFixed(4));

    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`);
}
cone(3,5);