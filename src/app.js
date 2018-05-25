import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 5000

// Apply middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use(cors())

// Define routes
app.get('/', (req, res, next) => {
  res.send({
    message: 'It is working!'
  })
})

// Initialize App
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
