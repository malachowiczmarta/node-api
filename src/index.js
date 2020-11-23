const http = require('http');
const PORT = 3000;
//pętla do nasłuchiwania na określonym porcie
http.createServer(function(request, response) {
    const responseData = {
        status: "ok!"
    };
    response.writeHead(200, {
      'Content-Type': 'application/json'  
    });
    response.end(JSON.stringify(responseData));
});

console.log()