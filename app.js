require('dotenv').config()

const express = require('express')
const app = express()
const body_parser = require('body-parser')
const cors = require('cors')
const router = require('./router')

// Used to handle cross domain
app.use(cors())

// Used to accept data as json
app.use(body_parser.json())

// Used to handle form data
app.use(body_parser.urlencoded({ extended: true }))

// Parse an HTML body into a string
app.use(body_parser.text({ type: '/' }))

// Tracks the requested routes
// router.init(app)
app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'biboy'
        }
    ])
})

app.post('/users', (req, res) => {
    console.log(req.body)

    res.send('OK')
})

// Listening to port
app.listen(process.env.PORT, () => {
    console.log(`Server is running in PORT ${process.env. PORT}`)
})