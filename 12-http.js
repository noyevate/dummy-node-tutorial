const http = require("http")

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.end("welcome to our homepage")
    }
    if(req.url === "/about"){
        res.end("This is a brief history about our product")
    }
    res.end(" <h1>OoPs!!!</h1>  <p>could not find the page which was requested </p>   <a href='/'> back home")
})
server.listen(5000)