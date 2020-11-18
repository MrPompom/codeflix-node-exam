function mycp () {
    const fs = require('fs')
    const path = require('path')
   
    fs.readFile(process.argv[2], 'utf8', function(err, data) {
        if (err) throw err;
        fs.writeFile(process.argv[3], data, (err) => {
            if(err) throw err;
        });
    });
}

mycp()