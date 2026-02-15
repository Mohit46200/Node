const express = require("express")


function middleware(app) {
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))  //this will convert form data into object this is called plugin

}


module.exports = middleware