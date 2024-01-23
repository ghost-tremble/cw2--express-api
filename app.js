const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const lessonsRouter = require('./routes/lessonRoutes')
const ordersRouter = require('./routes/orderRoutes');
const searchRouter = require('./routes/searchRoutes');
const logger = require('./middleware/logger');
const staticFile = require('./middleware/staticFile');




//middleware
app.use(logger)
app.use('/image', staticFile )
app.use(express.json())
app.use(cors())



app.use("/api/v1",lessonsRouter)
app.use("/api/v1",ordersRouter)
app.use("/api/v1",searchRouter)

app.get("/", (req,res)=>{
    
    res.json({success:true, message:"Hi luca Welcome to Cw2 Api"})
    
})


module.exports = app