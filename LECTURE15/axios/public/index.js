//function to get comments data
console.log(axios)
// function getComment(URL){
// //how ro send get req usig axios
// axios.get(URL).then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))
// }
// getComment("https://jsonplaceholder.typicode.com/comments")
async function getComment(URL){
    try{
    let comments=await axios.get(URL)
    console.log(comments)
    }
    catch(err){
        console.log(err)
    }
    }
    getComment("https://jsonplaceholder.typicode.com/comments")
    //func to add new blog
    addblog("http://localhost:3000/blog","firstblog","firstdescription");
   async function addblog(URL,title,description){
    try{
        let newblog={
            title:title,
            description:description
        }
       let response=await axios.post(URL,newblog)
       console.log(response.data)}
       catch(err){
        console.log(err)
       }
    }

  