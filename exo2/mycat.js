process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
    if (index < 2) {
        console.log(process.argv0)
        
    }
    else if (val === "-e") {
        console.log("tot")
    }
    else {
        console.log(`${index}: ${val}`);
    }
  });