const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("This is Aishwarya!")
})

app.listen(3000)
