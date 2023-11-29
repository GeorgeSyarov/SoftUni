function solve (str){
    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = str.match(regExp);
    console.log(matches.join(" "));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");