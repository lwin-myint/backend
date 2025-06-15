const mongodb = require("mongodb")
const dotenv = require("dotenv")
const mongoClient = mongodb.MongoClient
dotenv.config()
let db;
const mongodbConnector  =()=>{ mongoClient.connect(process.env.MONGODB_URL).then((result)=>{
    db=result.db()
    console.log("connection success");
    
}).catch(err=>console.log(err)
)}
const getDatabase = ()=>{
    if(db){
        return db
    }
    throw "no data"
}

module.exports = {mongodbConnector,getDatabase}