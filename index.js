const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const bookRouter = require('./routes/book.router')

app.use("/", bookRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
})

app.get("/registrasi.html", (req, res) => {
    res.sendFile(__dirname + "/public/registrasi.html");
})

app.listen(process.env.PORT, () => console.log("Server is running on port 5500"))
