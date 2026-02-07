const http = require("http")
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : new request recieved\n`
    fs.appendFile("./log.txt",log,(err,data) => {
        switch(req.url){
            case ("/"): res.end("This is home page")
                        break
            case ("/about"): res.end("This is about page")
                        break
            case ("/contactus"): res.end("This is contact page")
                        break
        }
    })
})

myserver.listen(8000, () => {
    console.log("server started")
})
