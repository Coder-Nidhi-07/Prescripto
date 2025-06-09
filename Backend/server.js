import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'


// Appm config
const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())


// apoi endpoint
app.use('/api/admin',adminRouter)
// localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send('Api is working again with nodemon i dont know how its updating realtime')
})

app.listen(port,()=>{
    console.log("SERVER STARTED",port)
})