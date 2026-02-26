const express = require("express")
const userRouter = require("./router")
const connectMongoDb = require("./connection")
const middleware = require("./middleware")
const cors = require("cors")


const app = express()

//connection
connectMongoDb("mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/")


app.use(cors({
    origin: "http://localhost:5173"
}))


//middlewares
middleware(app)


//routes
app.use("/api/users",userRouter)



app.listen(8002,() => console.log("server started"))
