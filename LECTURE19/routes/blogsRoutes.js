const express=require('express')
const router=express.Router();//small apllication
const Blogs=require("../model/blog");
const Users=require("../model/user");
const {postaddBlog,getreadBlog,getOneBlog,deleteOneBlog}=require("../controller/blogController")
router.post("/",postaddBlog);
router.get('/',getreadBlog);
router.get("/:id",getOneBlog)
router.delete("/:blogId",deleteOneBlog)
  router.put("/:blogId",async(req,res)=>{
  let {blogId}=req.params;
  let { userId, title, body } = req.body;
  
  let blogexist=await Blogs.findById(blogId);
  if(!blogexist)
    return res.json({
      success:false,
    message:"blog doesnt exist"
    })
    if(blogexist.userId!=userId)
     return  res.j3son({
        success:false,
        message:"you are not allowed to delete this blog"
      })
    let update=await Blogs.findByIdAndUpdate(blogId,{title,body})
    // await Blogs.save();
    return res.json({
      success:true,
      message:"updated",
  data:update
    }
    )
  })
module.exports=router;

