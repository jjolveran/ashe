const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send("Contact me at jo@cuantica.vc")
})

app.get('/about', (req, res) => {
    res.send("Developer me, Entrepreneur")
})

app.get('/hobbies', (req, res) => {
    res.send("Family, Code, Beer")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
