const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(cors())

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`listening on port ${ port }`)
})

app.get('/getHello', (request: any, response: any) => {
    response.send('hello')
    console.log('endpoint hit')
})