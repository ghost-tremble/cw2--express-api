const db = require("../database/db")

const searchCotroller = async (req,res) => {

  const {q} = req.query

 
  const result = await db.collection('lessons').find({
    $or: [
       {topic: {'$regex': q, '$options': 'i'}},
      {location: {'$regex': q, '$options': 'i'}},
     
  ]
    }).toArray();

  if(result.length <= 0){
    return res.json({
      success:false,
      message:"No results found"
    })
  }

return res.json({
    result,
    success:true
})
}

module.exports =  searchCotroller;