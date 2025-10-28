class OrderBook{
    constructor(symbol="BTCUSD"){
        this.symbol=symbol,
        this.bids=[],
        this.ask=[],
        this._nextId=1,
        this.lastTradedPrice=null
    }

    _genOrderId(){
        return this._nextId++;
    }
    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price;
                }
                else{
                    return a.timeStamp-b.timeStamp;
                }
            })
            //comparator used in sort vrna lexicographicaal sort hota hai agr asc /desc m krna h toh comparator bhjege
            //asc a-b,desc b-a
        }
        else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price-b.price
                }
                return a.timeStamp-b.timeStamp;
            })
        }
    }
    placeOrder(){

    }
    _marketMatch(){

    }
    _limitMatch(){}
}

//if a function or variable start with _(private)
// (agr _ se bnaega to voh hum mangee ki private hai classya var)
//let orderBook=new orderBook("BTCUSD")
let BTCUSDOrderBook=new OrderBook();

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,timeStamp:Date.now(),user:"Vanshika"})
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,timeStamp:Date.now(),user:"Saloni"})
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:96,quantity:10,timeStamp:Date.now(),user:"Sneha"})
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,timeStamp:Date.now(),user:"Keshav"})
BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:97,quantity:10,timeStamp:Date.now(),user:"Vivek"})

BTCUSDOrderBook._sort("BUY")


// console.log(BTCUSDOrderBook.bids)
BTCUSDOrderBook.ask.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,timeStamp:Date.now(),user:"Vanshika"})
BTCUSDOrderBook.ask.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,timeStamp:Date.now(),user:"Saloni"})
BTCUSDOrderBook.ask.push({orderId:2,side:"BUY",type:"MARKET",price:96,quantity:10,timeStamp:Date.now(),user:"Sneha"})
BTCUSDOrderBook.ask.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,timeStamp:Date.now(),user:"Keshav"})
BTCUSDOrderBook.ask.push({orderId:2,side:"BUY",type:"MARKET",price:97,quantity:10,timeStamp:Date.now(),user:"Vivek"})

BTCUSDOrderBook._sort("SELL")
console.log(BTCUSDOrderBook.ask)