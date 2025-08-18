const express=require('express')
const router=express.Router()
const Users=require("../model/user");
const Blogs=require("../model/blog")
const {postaddUser,getalluser,getuserbyid}=require("../controller/userController")
router.post('/',postaddUser)
router.get('/',getalluser)
router.get("/:id",getuserbyid)
module.exports=router;