const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = 3000

app.use(express.json())

const dataFile = path.join(__dirname, "../contacts.json")

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Invalid data" })
  }

  const entry = {
    name,
    email,
    message,
    date: new Date().toISOString()
  }

  let data = []

  if (fs.existsSync(dataFile)) {
    data = JSON.parse(fs.readFileSync(dataFile, "utf-8"))
  }

  data.push(entry)
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))

  res.status(200).json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
