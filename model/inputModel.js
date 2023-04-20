const mongoose=require('mongoose');

const inputSchema=new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    research:{type:String,required:true},
    year:{type:String,required:true}
})

const inputModel=new mongoose.model("prize",inputSchema);

module.exports=inputModel;