const express = require ('express')
const app = express()
const tasks = require('./routes/tasks')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
mongoose.set('strictQuery', false)

app.get('/hello', (req, res) =>{
    res.send("My Task Manager App")
})


app.use('/api/v1/tasks', tasks)

const PORT = 7000 || process.env.port

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
.then(() => console.log(`We are CONNECTED!`))
.catch((err) => console.log(err))


app.listen(PORT, ()=>{
    console.log(`Sever listening on port ${PORT}`)
})


app.listen(PORT, ()=>{
    console.log(`Sever listening on port ${PORT}`)
})

