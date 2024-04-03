const express = require ('express')
const app = express()
const tasks = require('./routes/tasks')
const cors = require('cors')
const mongoose = require('mongoose')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

require('dotenv').config()
mongoose.set('strictQuery', false)

// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound);
app.use(errorHandlerMiddleware);

// server 

const PORT = 7000 || process.env.port


const start = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
      console.log(`Connected to MongoDB!`);
      
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  start()



//   for Postman:   http://localhost:7000/api/v1/tasks

