const router=require('express').Router()
const {postPlaceOrder,getOrderBook,getRecentTrade}=require("../Controllers/order")
router.post("/order",postPlaceOrder)
router.get("/depth",getOrderBook)
router.get("/trades",getRecentTrade)
module.exports=router