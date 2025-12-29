const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const dataFile = path.join(__dirname, "../contacts.json")

app.post("/contact", (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false })
    }

    let data = []

    if (fs.existsSync(dataFile)) {
      const content = fs.readFileSync(dataFile, "utf-8")
      const parsed = content.trim() ? JSON.parse(content) : []
      data = Array.isArray(parsed) ? parsed : []
    }

    data.push({
      name,
      email,
      message,
      date: new Date().toISOString()
    })

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2))

    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
