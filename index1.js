const express = require('express')
const dotenv = require('dotenv')

// Configuration the .env file 
dotenv.config()

//Create Express APP 
const app = express()
const port = process.env.PORT || 8000


// Define the first route of APP

app.get('/', (req, res) => {
    // Send Hello Word
    res.send('APP Express + TypeScript + Swagger + Mongoose')
})

// Execute APP and Listen Request to PORT

app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})