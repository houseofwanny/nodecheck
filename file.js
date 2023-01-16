const fs= require('fs')


fs.writeFile('./welcome.txt', 'Hello Node',()=>{
    console.log ('file was written')
})


// Readfile
fs.readFile('./welcome.txt',(err,data)=>{
    if (err){
        console.log (err)
    }
    console.log(data.toString())
})