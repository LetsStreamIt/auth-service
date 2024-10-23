import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import dotenv from 'dotenv'
import cors from 'cors'
import router from './infrastructure/routes/AuthRoutes'

dotenv.config()

const app = express()

// Middleware to parse JSON and cookies
app.use(bodyParser.json())
app.use(cookieParser())

// Middleware to allow CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}

app.use(cors(corsOptions))

app.use('/api/auth', router)

// Error handling middleware
app.use((_req, res, next) => {
  const error = new Error('Not Found')
  res.status(404)
  next(error)
})

app.use((error: Error, _req: express.Request, res: express.Response) => {
  res.status(res.statusCode || 500).json({
    message: error.message
  })
})

export default app
