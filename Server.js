const http = require('http');
const fs= require('fs')

const Server= http.createServer((req, res)=>{
    console.log ('request made')
    res.end ('<h1>Hello Node!!!!</h1>')

});

Server.listen(3000,'localhost', ()=>{
    console.log ('listeninf for request on port 3000')
})

fs.readFile('./')