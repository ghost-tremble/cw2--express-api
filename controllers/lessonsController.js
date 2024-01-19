const db = require('../database/db');
const {lessons,orders} = require('../constants');
const { ObjectId } = require('mongodb');



const getAllLessons = async (req,res) =>{
const allLessons =  await db.collection(lessons).find().toArray();
return res.json({
    success:true,
    lessons:allLessons
})



}
const createLesson = async (req,res) =>{
    const {topic,spaces,location,price,image}  =  req.body;
    if(!(topic && spaces && location && price && image)){
        return res.json({success:false,message:"all fields are required"})
    }
  const collection = await db.collection(lessons).insertOne({...req.body});
  console.log(collection);

return res.json({success:true,message:"created successfully"})
}



const updateLesson = async (req,res) =>{
    // Retrieve the order and update the lessons collectionn 
 const {orderId} = req.params;
 const orderForUpdate = await db.collection(orders).findOne({_id: new ObjectId(orderId)})
 const lessonIds = orderForUpdate.lessonIds
 let updateCompleted


 for (var i = 0 ; i<lessonIds.length ; i++) {
 // get the lesson
 const lesson = await db.collection(lessons).findOne({_id: new ObjectId(lessonIds[i].id)})
 console.log(lesson)
 //Update the individual lesson

  const update = await db.collection(lessons).updateOne({_id:new ObjectId(lesson._id)},{$set:{
 spaces:lesson.spaces - lessonIds[i].spaces
}})
if(update){
    updateCompleted = true;
}
else {
    return res.json({
        success:false,
        message:"something went wrong"
    })
}

 }


return res.json({success:true,message:"updated successfully",})


}


module.exports = {
    getAllLessons,
    createLesson,
    updateLesson
}
