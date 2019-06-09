const MongoClient=require("mongodb").MongoClient;
const ObjectId=require("mongodb").ObjectId;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        console.log("Error connecting to db");
        
    }else{
        console.log("Connected successfully");
        const db=client.db('TodoApp');
        // db.collection('todos').deleteMany({text:'Eat lunch'}).then((data)=>{
        //     console.log(data.result);
            
        // })
        db.collection('todos').findOneAndDelete({text:'Eat lunch'}).then((data)=>{
            console.log(data.value);
            
        },(err)=>{
            console.log("Could not delete");
            
        });
    }
    client.close();
});