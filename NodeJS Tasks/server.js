const http = require('http');
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    err ? 
      console.log(err) 
    : console.log('File created successfully');
});

fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    err ? 
      console.log(err) 
    : console.log(data);
});


const password = require('./password-generator');
console.log(password);


const email = require('./email-sender');
console.log(email);


http.createServer((request, response) => {
    response.end("<h1>Hello Node !!!!</h1>\n")
}).listen(3000);