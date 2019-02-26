const express = require('express')
const execSync = require('child_process').execSync

const path = require('path')
const app = express()
const port = 80

app
.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})
.get('/shutdown', (req, res) => {
    res.send('Sending shutdown command ..........')
    code = execSync('shutdown /s /t 10');
    console.log(code);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 