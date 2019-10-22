// Timer 
// with Simon Olsen at Lighthouse Labs


let args = process.argv.slice(2);

const timer1 = function (args) {
  if (args.length === 0) {
    return
  } else {
    for (let item of args) {
      if (item > 0) {
        setTimeout(() => {
          process.stdout.write('BEEP\n')
        }, item * 1000)
      }
    }
  }
};

  timer1(args);