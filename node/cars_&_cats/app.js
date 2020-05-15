// get the http module:
const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
// creating a server using http module:
const server = http.createServer((request, response) => {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/cats') {
        fs.readFile('cat.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars") {
        fs.readFile('car.html', 'utf8', (errors, contents) => {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/mainecoon.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/mainecoon.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cutecar.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cutecar.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");