function login(input){
    let username = input[0];
    let pass = '';
    for (let i = username.length - 1; i >=0; i--){
       pass += username[i];
    }
    let index = 2;
    let guess = input[1];
    let tries = '';
    //console.log(pass);
    while (guess != pass){
        tries++;
        if (tries ==4){
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        guess = input[index];
        index++;
    }
    console.log(`User ${username} logged in.`);
}
login(['987','absdd','asxxx','weebly','name','789']);
