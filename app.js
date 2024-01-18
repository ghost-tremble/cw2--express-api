const express = require('express');
const app = express();
const cors = require('cors');

const lessonsRouter = require('./routes/lessonRoutes')
const ordersRouter = require('./routes/orderRoutes');
const logger = require('./middleware/logger');


//middleware
app.use(logger)
app.use(express.json())
app.use(cors())



app.use("/api/v1",lessonsRouter)
app.use("/api/v1",ordersRouter)

app.get("/", ()=>{
    console.log("Hello World")
})


module.exports = app