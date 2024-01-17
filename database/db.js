const {MongoClient} =  require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.dmwgm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = "lessons_store"
const connectDB= async ()=>{
    try{
        await client.connect().then(()=>{
            console.log("Connected to MongoDB")
        })
        return client.db(dbName)
    }
    catch(err){
console.log("Failed to connect to MongoDB");
    }
   

}


module.exports = {
    connectDB}
