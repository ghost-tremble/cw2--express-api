const db = require('../database/db');
const {lessons,orders} = require('../constants');



const getAllLessons = async (req,res) =>{
const allLessons =  await db.collection(lessons).find().toArray();;
return res.json({
    success:true,
    lessons:allLessons
})



}
const createLesson = async (req,res) =>{
  const collection = await db.collection('lessons').insertOne({...req.body});
  console.log(collection);

res.json({success:true,message:"created successfully"})
}

const updateLesson = async (req,res) =>{
    res.json({success:true,message:"updated successfully"})
}


module.exports = {
    getAllLessons,
    createLesson,
    updateLesson
}
