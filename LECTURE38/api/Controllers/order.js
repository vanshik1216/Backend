const OrderBook=require("../service/orderService")
let {publisher}=require("../../shared/index")
let ob=new OrderBook("BTCUSD");//globalObject
module.exports.postPlaceOrder=async(req,res)=>{
    //to create a new order for user who is placing an order
    let {side,type,price,quantity,user}=req.body
    let response=ob.placeOrder(side,type,price,quantity,user)
    await publisher.connect()
    publisher.PUBLISH("bookupdate",JSON.stringify(response.book))
    res.json({
        event:"order Update",
        data:{
            orderRepost:response.result,
            book:response.book
        }
    })
    // console.log(response)
}