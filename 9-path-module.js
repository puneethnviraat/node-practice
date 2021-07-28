const path = require('path');


console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

const http = require('http');

const server = http.createServer((req,res) => {
 if (req.url==='/') {
      res.end('welcome to our home page..')
    
 }else if (req.url==='/about') {
        res.end('here is our short story..')
   }
 else {
   res.end(`
    <h1>Oops!!</h1>
    <p>we can't find your page..</p>
    <a href="/">back home</a>`)
   
  } })

server.listen(5000)