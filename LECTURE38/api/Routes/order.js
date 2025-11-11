const router=require('express').Router()
const {postPlaceOrder}=require("../Controllers/order")
router.post("/",postPlaceOrder)
module.exports=router