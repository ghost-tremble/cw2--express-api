const db = require("../database/db")


const searchCotroller = async (req,res) => {
 

  const {q} = req.query

 
const result = await db.collection('lessons').find({
  $or: [
    {location: {'$regex': q, '$options': 'i'}},
    {title: {'$regex': q, '$options': 'i'}}
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