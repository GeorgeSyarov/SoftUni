function convert (name,lastName,hairColor){
    let person = {
        name,
        lastName,
        hairColor
    }

    let striged = JSON.stringify(person);
    console.log(striged);
}
convert('George', 'Jones',
'Brown' );