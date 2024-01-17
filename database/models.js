const orderCollection = "orders";
const lessonCollection = "lessons";


const orderSchema = {
name:{type: String, required: true},
phoneNumber:{type:String, required: true},
lessonIDs:{type: Array, required: true},


}

const lessonSchema = {
    topic:{type:String, required:true},
    price :{type:Number, required:true},
    location :{type:String, required:true},
    space :{type:Number, required:true},
}


module.exports = {
    orderCollection,
    lessonCollection
}