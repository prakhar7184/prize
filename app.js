const express=require('express');
const app=express();
const router=require('./router/prizeRouter')
const connectDb=require('./config/dbConfig')
const PORT=process.env.PROT || 3000;
app.use(express.json());

app.use('/',router)

connectDb();
app.listen(PORT,()=>{
    console.clear();
    console.log(`Server is running on ${PORT}`)
})