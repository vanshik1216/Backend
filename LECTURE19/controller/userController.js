const Users=require("../model/user");
module.exports.postaddUser=async(req,res)=>{
    let{username,email,password}=req.body;
    let userdata= new Users({
        username:username,
        email:email,
        password:password
    })
    await userdata.save();
    res.json({
        success:true,
        data:userdata,
        message:"Added"
    })
  }
  module.exports.getalluser=async(req,res)=>{
    let data=await Users.find()
    res.json({
        success:true,
        data:data,
        message:"data get"
    })
  }
  module.exports.getuserbyid=async(req,res)=>{
    let {id}=req.params;
    let users=await Users.findOne({_id:id}).populate("blogs");
    if(users){
    res.json({
        success:true,
        data:users
    })
  }
}