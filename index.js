const express = require('express')
const app = express()
const port = 3000

const filmRouter = require('./router/film')
const categoryRouter = require('./router/category')

app.get('/', (request, response) => {
    express.response.send('Hello World!')
})

app.use('/', filmRouter)
app.use('/', categoryRouter)

app.listen(port, () => {
    console.log(`jalan slur ${port}`)
})