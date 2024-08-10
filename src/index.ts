'use strict'

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI as string, {
    socketTimeoutMS: 1000
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

app.get('/', (_req, res) => {
  res.send('Authentication Service')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
