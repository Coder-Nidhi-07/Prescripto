import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// Appm config
const app=express()
const port=process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())


// apoi endpoint
app.get('/',(req,res)=>{
    res.send('Api is working again with nodemon i dont know how its updating realtime')
})

app.listen(port,()=>{
    console.log("SERVER STARTED",port)
})