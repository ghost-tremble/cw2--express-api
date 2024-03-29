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


const createBatchLessons = async (req, res) => {
    const lessonsArray = req.body.lessons;
  
    if (!Array.isArray(lessonsArray)) {
      return res.json({ success: false, message: "Expected an array of lessons." });
    }
  
    for (const lesson of lessonsArray) {
      const { topic, spaces, location, price, image } = lesson;
      if (!(topic && spaces && location && price && image)) {
        return res.json({ success: false, message: "All fields are required for each lesson." });
      }
    }
  
    const collection = await db.collection("lessons").insertMany(lessonsArray);
  
  
    return res.json({ success: true, message: "Batch created successfully" });
  };
  


const updateLesson = async (req,res) =>{
    // Retrieve the order and update the lessons collectionn 
 const {orderId} = req.params;
 const orderForUpdate = await db.collection(orders).findOne({_id: new ObjectId(orderId)})
 const lessonIds = orderForUpdate.lessonIds
 let updateCompleted

 console.log(lessonIds)

 for (var i = 0 ; i<lessonIds.length ; i++) {
 // get the lesson
 const lesson = await db.collection(lessons).findOne({_id: new ObjectId(lessonIds[i]._id)})

 //Update the individual lesson
 if(lesson.spaces <=0){
    return res.json({
        success:false,
        message:"this lesson is out of stock"
    })
 }
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
    updateLesson,
    createBatchLessons
}
