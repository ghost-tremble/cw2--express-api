const { orders } = require("../constants");
const db = require("../database/db");

const createNewOrder = async (req,res)=>{
  const {name,phoneNumber,lessonIds,spaces}  =  req.body;
  if(!(name,phoneNumber,lessonIds,spaces)){
    return res.json({success:false,message:"all fields are required"})
}

    
    // create new order in order collection

    const newOrder =  await db.collection(orders).insertOne({name, phoneNumber,lessonIds,spaces})
  return  res.json({success:true,message:"created successfully",newOrder})

}

module.exports = createNewOrder;