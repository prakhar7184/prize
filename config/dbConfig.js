const mongoose=require('mongoose')
require('dotenv').config();
const connectDB=()=>{mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected with db')
})
.catch((err)=>{
    console.log(err.message)
})
}

module.exports=connectDB;

