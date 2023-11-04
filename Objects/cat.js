function catBehave (arr){
    class Cat {
        constructor (name,age) {
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for(let i =0; i< arr.length;i++){
        let catData = arr[i].split(" ");
        let name = catData[0];
        let age = Number(catData[1]);
        let cat = new Cat(name,age);
        cats.push(cat);
    }

    for(let el of cats){
        el.meow();
    }
}

catBehave (['Ben 10','Joh 2',"Aema 3"]);