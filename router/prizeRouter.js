const express=require('express')
const router=express.Router();
const controller=require('../controller/prizeController')

router.get('/',controller.getPrize);

module.exports=router;