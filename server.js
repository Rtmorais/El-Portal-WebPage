const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")

server.use(express.static("public"))

server.use(express.static("assets"))

nunjucks.configure("views", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/productos", function (req, res) {
    return res.render("productos")
})

server.get("/servicios", function (req, res) {
    return res.render("servicios")
})

server.get("/contacto", function (req, res) {
    return res.render("contacto")
})

server.listen(5000, function () {
    console.log("Server ON")
})