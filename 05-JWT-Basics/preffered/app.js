// .env config


require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()


const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');


//middleware


app.use(express.static('./public'))
app.use(express.json())


//routes


app.use('/api/v1', mainRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


//port + env


const PORT = process.env.PORT || 5000


//port listen async


const start = async () => {
    try {
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
 
  start();
