function solve(input){
    let regExp = /(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g;
    let matches = regExp.exec(input);

    while (matches != null){
        let {day,month,year} = matches.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        matches = regExp.exec(input);
    }
}
solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);