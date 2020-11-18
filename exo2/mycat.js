  function mycat () {
  console.log(process.argv)
  if (process.argv.length < 3) {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
      rl.on("line", name => {
        console.log(name)
    });
  }
  else {
  console.log(process.argv[2])
  }
  }

  mycat();