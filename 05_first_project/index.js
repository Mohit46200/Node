const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()

app.get("/api/users",(req,res) => {
    return res.json(users)
})
app.get("/users",(req,res) => {
    const html=
    `<ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.send(html)
})
// dynamic path parameter
// /api/user/:id
// here id is variable

app.get("/api/users/:userid",(req,res) => {
    const id=Number(req.params.userid)
    const user=users.find((user) => user.id === id)
    return res.json(user)

})

app.listen(8002,() => console.log("server strted"))