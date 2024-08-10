const express = require('express')
const data = require('./data')
const dotenv = require('dotenv')
dotenv.config();


const server = express();

server.get('/' ,(req ,res)=>{
   
    res.json(data)

    
})

server.listen(process.env.PORT , ()=>{
    console.log(`Your Port is  ${process.env.PORT}`)
})

