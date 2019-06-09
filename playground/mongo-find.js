const MongoClient=require("mongodb").MongoClient;
const ObjectId=require("mongodb").ObjectId;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        console.log("Error connecting to db");
        
    }else{
        console.log("Connected successfully");
        const db=client.db('TodoApp');
        db.collection('todos').find({_id:new ObjectId("5cfd3336d5c1f606b8589913")}).toArray().then((document)=>{
            console.log(JSON.stringify(document,undefined,2));
            
        },(error)=>{
            console.log(error);
            
        });

        
        db.collection('todos').find().count().then((count)=>{
            console.log(count,'number of todos left');
            
        },(error)=>{
            console.log(error);
            
        });
        
    }
    client.close();
});