const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')
function islogin(req,res,next){
    if(!req.headers.authorization){
        return res.json({
             success:false,
            message:"no authorization key"
        })
    }
    let token=req.headers.authorization;
    if(!token){
        return res.json({
            success:false,
            message:"plz login"
        })
    }
    let decode=jwt.verify(token,"secret")
    console.log(decode)
    if(!decode){
        res.json({
            success:false,
            message:"invalid token"
        })
    }
    req.userid=decode.userid;
    next()
}
module.exports.islogin=islogin;