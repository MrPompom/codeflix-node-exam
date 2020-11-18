  function mycat () {
    const readline = require('readline');
    const fs = require('fs')
  if (process.argv.length < 3) {
      const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
      rl.on("line", name => {
        console.log(name)
    });
  }

  else if (process.argv[2] === "-e") {
      var datacopy;
      let j = 0;
      fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if (err) throw err;
        const lines = data.split(/\r?\n/);
        lines.forEach((line) => {
            console.log(line + "$");
        });

    });
  }

  else {
        fs.readFile(process.argv[2], 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data)
    });
    }
  }

  mycat();