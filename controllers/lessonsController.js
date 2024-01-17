const getAllLessons = async (req,res) =>{


res.json({
    success:true,
    lessons:[]
})

}
const createLesson = async (req,res) =>{

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
