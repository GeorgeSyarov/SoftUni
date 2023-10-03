function reading(pages,hours,days){
    let totalTime = (pages/hours).toFixed(1);
    let required = (totalTime/days).toFixed(1);

    console.log(required);
}
reading(212,20,2);
reading(432,15,4);