function inform (towns){
    for (let town of towns){
        let obj = {};
        let [name, latitude, longitude] = town.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        obj.town = name;
        obj.latitude = latitude;
        obj.longitude = longitude;

        console.log(obj);

    }
}
inform(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);