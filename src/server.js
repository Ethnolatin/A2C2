
const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

require('dotenv').config({path: '../.env'})

const router = express.Router()
const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json({strict: false}))
app.use(express.urlencoded({extended: false}))
app.use("/", router)

app.listen(PORT, () => console.log("Server Running"))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "duchesne.fred@gmail.com",
        pass: process.env.PASS,
    },
})
  
contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const workshop = req.body.workshop
    const message = req.body.message 
    const mail = {
        from: name,
        to: "duchesne.fred@gmail.com",
        subject: "Contact depuis le site A²C²",
        html:   `<p>Nom : ${name}</p>
                <p>E-mail : ${email}</p>
                <p>Atelier : ${workshop}</p>
                <p>Message : ${message}</p>`,
    }
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" })
      } else {
        res.json({ status: "Message envoyé" })
      }
    })
  })