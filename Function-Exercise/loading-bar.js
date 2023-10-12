function loading(num) {
  let loadBox = [];
  if (num == 100) {
    console.log(`100% Complete!\n[%%%%%%%%%%]`);
  } else {
    for (let i = 0; i < num; i = i + 10) {
      loadBox.push("%");
    }
    for (let a = num; a < 100; a = a + 10) {
      loadBox.push(".");
    }

    console.log(`${num}% [${loadBox.join('')}]\nStill loading...`);
  }
}
loading(30);
