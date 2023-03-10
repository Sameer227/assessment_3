// import { getJokes } from '../api/controller/Jokes.js'
const { getJokes } = require('../api/controller/Jokes')



const express = require('express')

const router = express.Router()



router.get('/jokes',getJokes)





module.exports = router