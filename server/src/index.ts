const express = require('express')

require('dotenv').config()

const app = express()

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`listening on port ${ port }`)
})

app.get('/api/getHello', (request: any, response: any) => {
    response.send('hello')
    console.log('endpoint hit')
})