// Timer 2
// with Simon Olsen at Lighthouse Labs
// Listens for user input and sets timers on demand
// Inputs:
// "b" => beeps right away
// x from 1 to 9 => sets a timer for x seconds
// ctrl-c exits program

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  let keyCode = key <= 9 && key >= 1;
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "\u0062") {
    process.stdout.write("BEEP\n");
  } else if (keyCode) {
    setTimeout(() => {
      process.stdout.write("BEEP\n");
    }, key.substr(-1) * 1000);
    console.log(`setting timer for ${key} seconds`);
  }
});

console.log("after callback");