function hashtag (input){

    let words = input.split(" ");

    for(let word of words){
        if(word.includes("#") && word.length > 1){
            let flag = true;
            for(let i = 0; i< word.length;i++){
                let curent = word.charAt(i);
                if ((curent < 97 || curent > 122) && (curent < 65 || curent > 90)){
                    flag = false
                }
            }
            if(flag){
                console.log(word.replace("#",""));
            }

        }
    }
}
hashtag('The symbol # is known #variously in English-speaking #re1gions as the #number sign');