const express = require("express")

const app = express()


// structur of using express --> app.METHOD("PATH",HANDLER)
app.get("/",(req,res) => {
    return res.send("Hello from home page")
})
app.get("/about",(req,res) => {
    return res.send(`Hello from about page to ${req.query.name}`)
})


app.listen(8001,() => console.log("Server started"))
