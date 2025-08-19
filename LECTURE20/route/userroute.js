const express=require('express')
const router=express.Router()
const {m5}=require("../middleware/pathlevel")
router.use(m5)
 router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"user added succesfully"
    })
 })
 router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all users data fetched"
    })
 })
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"one user fetched"
    })
})
 module.exports=router;