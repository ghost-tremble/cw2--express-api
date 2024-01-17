const express = require('express');
const app = express();
const cors = require('cors');
const {connectDB, client} = require('./database/db');
const lessonsRouter = require('./routes/lessonRoutes')
const ordersRouter = require('./routes/orderRoutes')
//middleware
app.use(express.json())
app.use(cors())



// Connect Database and create collections
connectDB().then((db)=>{
  app.use("/api/v1",lessonsRouter)
  app.use("/api/v1",ordersRouter)
})


app.get("/", ()=>{
    console.log("Hello World")
})


module.exports = app