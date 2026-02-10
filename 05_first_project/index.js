const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()

app.get("/api/users",(req,res) => {
    return res.json(users)
})
app.get("/users",(req,res) => {
    const html=
    `<ul>
        ${users.map((user) => `<li>${user.email}</li>`).join("")}
    </ul>`
    return res.send(html)
})
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
        return res.json({"request": "pending"})
    })
    .patch((req,res) => {
        return res.json({"request": "pending"})
    })
    .delete((req,res) => {
        return res.json({"request": "pending"})
    })

app.listen(8002,() => console.log("server strted"))
