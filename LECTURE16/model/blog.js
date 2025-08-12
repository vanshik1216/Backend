const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date
  });
  //modelname ,schemaname
module.exports= mongoose.model('Blog', BlogPost);
