function solve(input) {
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let line = input[i];
    let pattern =
      /([^\s]+)>(?<nums>\d{3})\|(?<small>[a-z]{3})\|(?<large>[A-Z]{3})\|(?<sym>[^<>]{3})<\1/;

    let match = line.match(pattern);

    if (match) {
      
        let { nums, small, large, sym } = match.groups;
        let encryptedPassword = nums + small + large + sym;
        console.log(`Password: ${encryptedPassword}`);
      
    } else {
      console.log("Try another password!");
    }
  }
}

// encrypt([
//   "3",

//   "##>00|no|NO|!!!?<###",

//   "##>123|yes|YES|!!!<##",

//   "$$<111|noo|NOPE|<<>$$",
// ]);

solve([
  "5",

  "aa>111|mqu|BAU|mqu<aa",

  "()>111!aaa!AAA!^&*<()",

  "o>088|abc|AAA|***<o",

  "asd>asd|asd|ASD|asd<asd",

  "*>088|zzzz|ZzZ|123<*",
]);
