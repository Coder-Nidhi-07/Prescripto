import express, { Router } from "express"

import { addDoctor,loginAdmin } from "../controllers/adminController.js"
import upload from "../middlewares/multer.js"

const adminRouter=express.Router()
// End point
adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
export default adminRouter