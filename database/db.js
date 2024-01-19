// add in a function to set db
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const dbName = "lessons_store"
const uri = process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.dmwgm.mongodb.net/"
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
let db = client.db(dbName);


module.exports = db