function prime(n) {
  let times = 0;
  for (i = 1; i <= n; i++) {
    let devision = n % i;
    if (devision == 0) {
      times++;
      //console.log(i);
    }
  }
  if (times == 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
prime(2);
prime(3);
