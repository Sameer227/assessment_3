const app = require('express')()
require('dotenv/config')
const cors = require('cors')
const body_parser = require('body-parser')
app.use(cors({origin:"*"}))
app.use(body_parser.json())
const routes = require('./routes/routes')
let port : number | string = process.env.PORT || 3050


app.use('/api',routes)



app.listen(port,console.log(`server is running on ${port}`))