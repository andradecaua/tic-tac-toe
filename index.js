const express = require('express')

const app = express()


app.get('/', (req, res) => {
    console.log(req.ip)
    res.send('oii')
})

app.listen(80, () => {
    console.log('oi')
})