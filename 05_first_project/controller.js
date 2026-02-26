const User = require("./schema.js")
const Login = require("./loginScema.js")

async function getAllUser(req,res){
    res.setHeader("X-name","Mohit")  //this is the way to send a header alsways type X in custom header
    console.log(req.headers)        //this is the way to see the incoming header
    
    const alldbUser= await User.find({})
    const html=
    `<ul>
        ${alldbUser.map((user) => `<li>${user.first_name}${user.email}</li>`).join("")}
    </ul>`
    return res.json(alldbUser)
}



async function addUser(req,res){
    const body = req.body    
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
}



async function gerUserById (req,res){
        const id=req.params.userid
        const user=await User.findById(id)
        return res.json(user)
}


async function deleteUserById(req,res){
        return res.json({"request": "pending"})

}

async function patchUserById(req,res){
        return res.json({"request": "pending"})
}

async function login(req,res){
        const body=req.body
        const result = await Login.create({
            email:body.email,
            password:body.password
        })
        console.log(result)
        return res.status(201).json({msg: "Success"})
}


module.exports = {
    getAllUser,
    addUser,
    gerUserById,
    deleteUserById,
    patchUserById,
    login
}