const Blogs=require("../model/blog")
module.exports.postaddBlog=async(req,res)=>{
    let {title,body,userId}=req.body;
    // console.log(title,body);
    let userexist=await Users.findById(userId);
    if(userexist){
    let newblog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    })
  
   await newblog.save();
 userexist.blogs.push(newblog._id)
await userexist.save()
   res.json({
    success:true,
    data:newblog,
    message:"blog added successfully"
   })
  }}
module.exports.getreadBlog=async(req,res)=>{
    let allblog= await Blogs.find();//return all data
    res.json({
        success:true,
        data:allblog
    })
}
module.exports.getOneBlog=async(req,res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
}
module.exports.deleteOneBlog=async(req,res)=>{
    let {blogId}=req.params;
    let {userId}=req.body;
    let blogexist=await Blogs.findById(blogId);
  if(!blogexist)
    return res.json({
      success:false,
    message:"blog doesnt exist"
    })
  
  if(blogexist.userId!=userId)
    res.json({
      success:false,
      message:"you are not allowed to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist=await Users.findById(userId);
    let blog=userExist.blogs.filter((id) => id!=blogId)
    userExist.blogs=blog;  
    await userExist.save();
    res.json({
      success:true,
      message:"blog deleted",
      data:userExist
    })
  }
