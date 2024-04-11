require('dotenv').config()
require('express-async-errors')

const cors = require('cors')


const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const express = require('express')
const app = express()

// middlewares

app.use(express.json())
app.use(cors())
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


//routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
  });

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000



const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => console.log(`My server is listening port ${port}...`))
    } catch (error) {
      console.log(error)
    }
  }
  
  start()
