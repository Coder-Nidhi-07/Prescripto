import validator from 'validator'

import bcrypt, { hash } from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'

// Api for adding Doctor

const addDoctor=async(req,res)=>{
    try{
const {name,email,password,speciality,degree,experience,about,fees,address}=req.body
const imageFile=req.file
// console.log({name,email,password,speciality,degree,experience,about,fees,address},imageFile)

// Checking for all data to add doctor
if(!name || !email||!password||!speciality||!experience||!about||!address){
    return res.json({success:false,message:"Missing Detail"})
}


    

    // Validating email format
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter a valid email"})

    }
    // validating strong password:
    if(password.length<8){
return res.json({success:false,message:"please enter strong password"})
    }

    // hashing doctor password:
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    // upload image to cloudinary:
    const imageUpload=await cloudinary.uploader(imageFile.path,{resouce_type:'image'})
const imageYrl=imageUpload.secure_url


const doctorData={
    name,
    email,
    image:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
     address:JSON.parse(address),
     date:Date.now()
}

const newDoctor=new doctorModel(doctorData)
await newDoctor.save()
res.json({sucess:true,message:"Doctor Added"})


}
catch(error){
console.log("error")
res.json({success:false,message:error.message})
    }

}

// api for admin login:

const loginAdmin=async(req,res)=>{
    try {
const {email,password}=req.body
if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
const token=jwt.sign(email+password,process.env.JWT_SECRET)
res.json({sucess:true,token})
}
  else{
    res.json({success:false,message:"invalid Credentials"})
}      
    } catch (error) {
       console.log("error")
res.json({success:false,message:error.message})
    }
}

export {addDoctor,loginAdmin}