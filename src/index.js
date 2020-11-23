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
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//GET 
app.get('/', (req, res) => {
    res.send("hello")
});


app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ok: true});
})


app.listen(PORT, (err) => {
    if (err) {
        console.log('Error');
        throw err;
    } else {
        console.log(`Node server is running on port ${PORT}`);
    }
});