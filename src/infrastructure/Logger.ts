import winston from 'winston'

const { combine, timestamp, printf, colorize } = winston.format

// Define a custom log format
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`
})

// Create the logger instance
const logger = winston.createLogger({
  level: 'info', // Set default logging level
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add a timestamp to each log
    colorize(), // Colorize output for console readability
    customFormat // Apply the custom format
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Separate error logs
  ]
})

export default logger
