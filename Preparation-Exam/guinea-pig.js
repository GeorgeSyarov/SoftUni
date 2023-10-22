function feed(input){
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weigth = Number(input[3]);
    //console.log(food,hay,cover,weigth);

    let gramFood = food*1000;
    let gramHay = hay*1000;
    let gramCover = cover*1000;
    let gramWeigth = weigth*1000;

    for(let i=1; i<=30;i++){
        gramFood -= 300;
        if(i % 2 ==0){
            gramHay = gramHay - (gramFood*0.05);
        }
        if(i % 3==0){
            gramCover = gramCover - (gramWeigth/3);
        }
        if(gramFood <= 0 || gramHay <= 0 || gramCover <=0 ){
            console.log(`Merry must go to the pet store!`);
            return;
        }
        
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(gramFood/1000).toFixed(2)}, Hay: ${(gramHay/1000).toFixed(2)}, Cover: ${(gramCover/1000).toFixed(2)}.`);
}
feed(['1','1.5','3','1.5']);