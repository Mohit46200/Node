const express = require("express")
const urlRoute = require("./routes")
const {connection} = require("./connection")
const URL = require("./url_Schema")
const path = require('path')

const app = express()
const Port = 9001

connection('mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/')
.then(() => console.log("Database connected"))
.catch(err => console.log("Error:", err))


app.set("view engine","ejs")
app.set('views', path.resolve("./ejs"))
app.use("/home",async(req,res) => {
    const urls= await URL.find({})
    return res.render('home',{
        urls:urls,
    })
})


app.use(express.json())
app.use("/url", urlRoute)



app.listen(Port, () => console.log(`Server started at ${Port}`))
