function mycp () {
    const fs = require('fs')
    const path = require('path')
    if (process.argv[2] === "-r") {
        //Folder and files
        const src = path.join(__dirname + '${process.argv[3]}');
        const sourceFiles = fs.readdir(src, (err, files) => {
            if (err)
                console.log(err);
            else {
                files.forEach(file => {
                    return path.join(__dirname, file);
                })
            }
        })

        //Destination
        const destination = path.join(__dirname + '${process.argv[4]}')

        //link
        const read = fs.createReadStream(sourceFiles);
        const write = fs.createWriteStream(destination);
        read.pipe(write);

    }
    else {
    fs.readFile(process.argv[2], 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data)
        fs.writeFile(process.argv[3], data, (err) => {
            if(err) throw err;
        });
    });}
}

mycp()