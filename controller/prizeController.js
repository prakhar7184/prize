const inputModel=require('../model/inputModel')
class controller{
static getPrize=async (req,res)=>{
    try {
        //find distinct year
        const prizeYear=await inputModel.find().distinct("year");
        //find distinct year
        const prizeCategory=await inputModel.find().distinct("category");
        
        var output=[];
        for(let i=0;i<prizeYear.length;i++)
        {
            for(let j=0;j<prizeCategory.length;j++)
            {
                //find data based on each year and each category
                const data=await inputModel.find({year:prizeYear[i],category:prizeCategory[j]});
                var winner=[];
                    var share=1/data.length;
                    for(let k=0;k<data.length;k++)
                    {
                    winner.push({name:data[k].name,share:Number(share.toFixed(2))})
                    }
                output.push({
                    category:prizeCategory[j],
                    year:Number(prizeYear[i]),
                    winner:winner
                })
            }   
        }        
        return res.json(output);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
}
}
module.exports=controller;