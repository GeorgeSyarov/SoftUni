function register (input){

    let heroes = [];
    for(let heroInfo of input){
        let [heroName,level,items] = heroInfo.split(' / ');
        level = Number(level);
        let obj = { name: heroName, level: level, items: items};
        heroes.push(obj);
    }

    heroes.sort((a,b)=> a.level -b.level);
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}
register([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);