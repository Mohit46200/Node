const express = require("express")
const users = require("./MOCK_DATA.json")
const mongoose = require("mongoose")



//connection
mongoose
        .connect("mongodb+srv://mohit22600:dpXsejSe31ILy41F@cluster0.dlnt1ti.mongodb.net/")
        .then(() => console.log("Database connected"))
        .catch((err )=> console.log("Error",err))

//scema
const userScema = new mongoose.Schema({
    first_name:{
        type:String,
        required: true,
    },
    last_name:{
        type: String,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    job_title:{
        type: String
    },
    gender:{
        type: String
    }

},{timestamps: true})

const User= mongoose.model('user',userScema)


const app = express()


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))  //this will convert form data into object this is called plugin (middleware)


app.get("/api/users",(req,res) => {
    res.setHeader("X-name","Mohit")  //this is the way to send a header alsways type X in custom header
    console.log(req.headers)        //this is the way to see the incoming header
    return res.json(users)
})

app.get("/users",async (req,res) => {
    const alldbUser= await User.find({})
    const html=
    `<ul>
        ${alldbUser.map((user) => `<li>${user.first_name}${user.email}</li>`).join("")}
    </ul>`
    return res.send(html)
})


//all types of task done in db
// Task	                            Method

// Create	                        create()
// Read	                            find(), findOne(), findById()
// Update	                        updateOne(), findByIdAndUpdate()
// Delete	                        deleteOne(), findByIdAndDelete()
// Count	                        countDocuments()
// Advanced	                        aggregate()


app.route("/api/users/:userid")
    .get(async(req,res) => {
        const id=req.params.userid
        const user=await User.findById(id)
        return res.json(user)
    })

    .patch((req,res) => {
        return res.json({"request": "pending"})
    })
    .delete((req,res) => {
        return res.json({"request": "pending"})
    })



app.route("/api/users")
        .post(async(req,res) => {
            const body = req.body     //in this body we get the data from the client and we will insert it into users
            console.log("fuck",body)
            const result = await User.create({
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                gender: body.gender,
                job_title: body.job_title,
            })
            console.log(result)
            return res.status(201).json({msg: "Success"})
        })



app.listen(8002,() => console.log("server started"))
