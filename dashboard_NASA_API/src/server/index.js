const express = require("express")
const cors = require("cors")
require("dotenv").config()
const spirit = require("./router/spirit")
const opportunity = require("./router/opportunity")
const curiosity = require("./router/curiosity")
const latest_photos = require("./router/lastestPhotos")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/curiosity", curiosity)
app.use("/api/opportunity", opportunity)
app.use("/api/spirit", spirit)
app.use("/api/photos", latest_photos)

const port = 8080

app.listen(port, () => console.log("server is listening to the port", port))
