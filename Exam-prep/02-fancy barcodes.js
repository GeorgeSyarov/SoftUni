function check(input){
    let n = Number(input.shift());
    let pattern1 =/@#+(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let pattern2 = /\d/g;

    for(let i = 0; i < n;i++){
        let match = input[i].match(pattern1);
        if(match != null){
            let word = match[1];
            if(match){
                let numFind = word.match(pattern2);
                if(numFind != null){
                    let barcode = numFind.join("");
                    console.log(`Product group: ${barcode}`);
                }else{
                    console.log("Product group: 00");
                }
                
            }
        }
        if(!match){
            console.log("Invalid barcode");
        }
    }
}
check((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
);