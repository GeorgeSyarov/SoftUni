function solve (input){

    let countOfPlanet = Number(input.shift());

    let pattern1 = /[star]/gi;
    let decryptedPlanets = [];

    for(let i =0; i< countOfPlanet; i++){
        let decryptedMsg = '';
        let msg = input[i];
        let match = msg.match(pattern1);
        if(match){
            let length = match.length;
            for(let char of msg){
                let code = char.charCodeAt() - length;
                let newWord = String.fromCharCode(code);
                decryptedMsg += newWord;
            }
        }else{
            decryptedMsg = msg;
        }
        decryptedPlanets.push(decryptedMsg);
    }

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<count>\d+)/;

    let atacked = [];
    let destroyed = [];
    for(let planet of decryptedPlanets){
        let match = planet.match(planetPattern);
        if(match){
            let {name,type} = match.groups;
            if(type == "A"){
                atacked.push(name);
            }else{
                destroyed.push(name);
            }

        }
    }

    atacked = atacked.sort((a,b) => a.localeCompare(b));
    destroyed = destroyed.sort((a,b) => a.localeCompare(b));
    console.log(`Attacked planets: ${atacked.length}`);
    atacked.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(planet => console.log(`-> ${planet}`));

}
solve(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']
);