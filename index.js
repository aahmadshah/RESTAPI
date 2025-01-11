const express = require('express');
const app = express();
const userRouter = require("./routes/user_routes");
const {logReqResponse}= require("./middlewares/index_middleware");
//const mongoose=require('mongoose');
const fs = require('fs');
const {connectMongoDB}= require('./connection_Mongodb');

const PORT =8000;



//Connection Mongoose
connectMongoDB("mongodb://127.0.0.1:27017/users-app-ahmed-1").then(()=>
{
console.log("Connected to MongoDB server");
});


//Middleware Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqResponse("log.txt"));

//Routes
app.use('/api/users',userRouter);


app.listen(PORT, function () {
    console.log('Server running on port', PORT);
})

