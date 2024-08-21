import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/database'
import authRoutes from './routes/authRoutes'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

app.use(bodyParser.json())

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}

app.use(cors(corsOptions))

app.use('/api/auth', authRoutes)

app.use((_req, res, next) => {
  const error = new Error('Not Found')
  res.status(404)
  next(error)
})

app.use(
  (error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    res.status(res.statusCode || 500).json({
      message: error.message
    })
  }
)

export default app
