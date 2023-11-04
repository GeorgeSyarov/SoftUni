function list(names) {
  for (let name of names) {
    let personalId = name.length;
    let info = {};
    info.name = name;
    info.id = personalId;

    console.log(`Name: ${info.name} -- Personal Number: ${info.id}`);
  }
}
list(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
