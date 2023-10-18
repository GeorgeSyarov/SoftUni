function smallestTwo(input){
    let sortedInAscending = input.sort((a,b) => {return a-b;}) //sort() се използва когато искаме азбучно да подредим стрингове в масив. В случая когато искаме да подредим числа по нарастване използваме следната функция като допълнение в sort()
    let firstTwo = sortedInAscending.slice(0,2);
    console.log(firstTwo.join(' '));
}
smallestTwo([30, 15, 50, 5]);