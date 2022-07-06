import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'

// Configuration the .env file 
dotenv.config()

//Create Express APP 
const app: Express = express()
const port: number | string = process.env.PORT || 8000

// Define the first route of APP

app.get('/', (req: Request, res:Response) => {
    // Send Hello Word
    res.send('APP Express + TypeScript + Swagger + Mongoose + Jest')
})

// Execute APP and Listen Request to PORT

app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})