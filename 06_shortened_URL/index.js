const express = require("express")
const urlRoute = require("./routes")
const {connection} = require("./connection")
const URL = require("./url_Schema")

const app = express()
const port = 8001

connection('mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/')
.then(() => console.log("Database connected"))
.catch(err => console.log("Error:", err))


app.use(express.json())
app.use("/url", urlRoute)


app.listen(port, () => console.log(`Server started at ${port}`))
