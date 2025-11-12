const OrderBook=require("../service/orderService")
let {publisher}=require("../../shared/index")
let ob=new OrderBook("BTCUSD");//globalObject-problem kyuki yeh sirf ek symbol market m chljega baki m nhiii 
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
module.exports.getOrderBook=async(req,res)=>{
    let bookSnapShot=ob.getBookSnapShot();
    return res.json(bookSnapShot)
}
module.exports.getRecentTrade=async(req,res)=>{
    let {limit}=req.query;
    let recentTrade=ob.getRecentTrades(limit);
    return res.json(recentTrade)
}