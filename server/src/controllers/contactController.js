const fs = require("fs")
const path = require("path")

const dataPath = path.join(__dirname, "../../contacts.json")

function saveContact(req, res) {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false })
  }

  let contacts = []

  if (fs.existsSync(dataPath)) {
    const fileData = fs.readFileSync(dataPath)
    contacts = JSON.parse(fileData)
  }

  contacts.push({
    name,
    email,
    message,
    date: new Date().toISOString()
  })

  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2))

  res.status(200).json({ success: true })
}

module.exports = { saveContact }
