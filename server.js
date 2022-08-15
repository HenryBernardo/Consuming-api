const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    return res.json(data)
  } catch (error) {}
})

app.listen('4567')
