const express = require("express")
const userRouter = require("./router")
const connectMongoDb = require("./connection")
const middleware = require("./middleware")

const app = express()

//connection
connectMongoDb("mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/")

//middlewares
middleware(app)


//routes
app.use("/api/users",userRouter)


app.listen(8002,() => console.log("server started"))
