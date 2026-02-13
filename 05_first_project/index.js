const express = require("express")
const users = require("./MOCK_DATA.json")
const fs =require("fs")
const mongoose = require("mongoose")


//connection
mongoose
        .connect('mongodb+srv://mohit22600_db_user:YED7E60PdueaZRJR@cluster0.cyzqtqr.mongodb.net/?appName=Cluster0')
        .then(() => console.log("Database connected"))
        .catch((err )=> console.log("Error",err))

//scema
const userScema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastname:{
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

})

const User= mongoose.model('user',userScema)



const app = express()


app.get("/api/users",(req,res) => {
    res.setHeader("X-name","Mohit")  //this is the way to send a header alsways type X in custom header
    console.log(req.header)        //this is the way to see the incoming header
    return res.json(users)
})
app.get("/users",(req,res) => {
    const html=
    `<ul>
        ${users.map((user) => `<li>${user.email}</li>`).join("")}
    </ul>`
    return res.send(html)
})

app.use(express.urlencoded({extended:false}))  //this will convert form data into object this is called plugin (middleware)


// dynamic path parameter
// /api/user/:id
// here id is variable

app.route("/api/users/:userid")
    .get((req,res) => {
        const id=Number(req.params.userid)
        const user=users.find((user) => user.id === id)
        return res.json(user)
    })
    .post((req,res) => {
        const body = req.body     //in this body we get the data from the client and we will insert it into users
        // users.push({           // we can also do by below meyhod
        //     "email": body.email,
        //     "first_name": body.first_name,
        //     //etc
        // })
        users.push({...body, "id":users.length+1})
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data) => {
            return res.status(201).json({request: "success",id :users.length})
        })
        
    })
    .patch((req,res) => {
        return res.json({"request": "pending"})
    })
    .delete((req,res) => {
        return res.json({"request": "pending"})
    })

app.listen(8002,() => console.log("server strted"))
