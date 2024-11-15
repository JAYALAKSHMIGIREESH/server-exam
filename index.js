require('dotenv').config()

const express = require('express')
const cors = require('cors')

const userServer = express()
const router = require('./routes/router')
require('./database/dbConnection')
userServer.use(cors())

userServer.use(express.json())
userServer.use(router)

const PORT = 6000 || process.env.PORT

userServer.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);
})

userServer.get('/', (req, res) => {
    res.status(200).send(`<h1 style='color:red;'>Server is running</h1>`)
})