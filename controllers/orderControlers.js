const { orders } = require("../constants");
const db = require("../database/db");

const createNewOrder = async (req,res)=>{
    const orderStructure = {
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        lessonId:req.body.lessonId,
        spaces :req.body.spaces

    }
    // create new order in order collection

    const newOrder =  await db.collection(orders).insertOne({...req.body})
  return  res.json({success:true,message:"created successfully",newOrder})

}

module.exports = createNewOrder;