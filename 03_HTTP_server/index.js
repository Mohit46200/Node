const http = require("http")
const fs = require("fs")
const url = require("url")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} :${req.url} : new request recieved\n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile("./log.txt",log,(err,data) => {
        switch(myUrl.pathname){
            case ("/"): res.end("This is home page")
                        break;
            case ("/about"): res.end("This is about page")
                        break;
            case ("/contactus"): res.end("This is contact page")
                        break;
            case ("/search"): 
                        const search= myUrl.query.search
                        console.log(search)
                        res.end(`Here are your result ${search}`)
                        break;            
            case ("/signup"):
                        if(req.method==="GET") res.end("This is sign up page")
                        else if(req.method==="POST"){
                            //write code here to put data in database
                            req.end("Success")
                    }
        }
    })
})

myserver.listen(8000, () => {
    console.log("server started")
})
