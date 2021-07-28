const { readFile, writeFile, } = require('fs');
let first, second;
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
     first = result;

readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    second = result;
    writeFile('./content/result-sync.txt', `${first},${second}`, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log("result here");
    });
})
})
