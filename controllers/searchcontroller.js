const db = require("../database/db")
const {lessons} =  require("../utils")

const searchCotroller = async (req,res) => {
  const index =   await db.collection('lessons').createIndex({ topic: 'text', location: 'text' });
console.log(index)

  const {q} = req.query
console.log(q)
 
const result = await db.collection('lessons').find({
    $text: { $search: q }
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