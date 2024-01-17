const express = require('express');
const app = express();
const cors = require('cors');
const {connectDB, client} = require('./database/db');

//middleware
app.use(express.json())
app.use(cors())



// Connect Database
connectDB()


app.get("/", ()=>{
    console.log("Hello World")
})


module.exports = app