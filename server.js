const express = require('express');
const { Server } = require('http');
const app = express();
//  nodejs module
const httpServer = require('http').createServer(app);

// app.get('index.html', (req, res) => {
//     res.send('Hello World!')
//   })
  
// app.post('/', function (req, res) {
//     console.log("Got a POST request for the homepage");
//     res.send('Hello POST');
// })

app.use(express.static("public"));

// let port = process.env.PORT||3000;
httpServer.listen(3011, function () {
    console.log("Server started at port 3011");
})