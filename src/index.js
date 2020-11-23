// const http = require('http');
const PORT = 3000;
//pętla do nasłuchiwania na określonym porcie
// http.createServer(function(request, response) {
//     const responseData = {
//         status: "ok!"
//     };
//     response.writeHead(200, {
//       'Content-Type': 'application/json'  
//     });
//     response.end(JSON.stringify(responseData));
// }).listen(PORT);

// console.log(`Node server is running on port ${PORT}`);


//express korzystał z tego modułu http
const express = require('express');
const app = express();

//GET 
app.get('/', (req, res) => {
    res.send("hello")
});




app.listen(PORT);