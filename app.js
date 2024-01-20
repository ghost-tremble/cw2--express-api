const express = require('express');
const app = express();
const cors = require('cors');

const lessonsRouter = require('./routes/lessonRoutes')
const ordersRouter = require('./routes/orderRoutes');
const searchRouter = require('./routes/searchRoutes');
const logger = require('./middleware/logger');


//middleware
app.use(logger)
app.use(express.json())
app.use(cors())



app.use("/api/v1",lessonsRouter)
app.use("/api/v1",ordersRouter)
app.use("/api/v1",searchRouter)

app.get("/", (req,res)=>{
    
    res.json({success:true, message:"Hi luca Welcome to Cw2 Api"})
    
})


module.exports = app