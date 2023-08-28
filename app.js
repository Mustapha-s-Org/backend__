// import modules 
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
// import error handlers 
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import DB connection file 
/* import connectDB from './config/db.js'*/
// import routes 
import homeRoute from './routes/homeRoute.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// connectDB()

app.use('/api', homeRoute)

app.use(notFound)
app.use(errorHandler)

//export app for testing 
export default app 
