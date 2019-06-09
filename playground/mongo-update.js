const MongoClient=require("mongodb").MongoClient;
const ObjectId=require("mongodb").ObjectId;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        console.log("Error connecting to db");
        
    }else{
        console.log("Connected successfully");
        const db=client.db('TodoApp');
        db.collection('todos').findOneAndUpdate({
            _id: new ObjectId('5cfd4f24116eaf271c1ca842')
        },{
           $set:{
               completed:false,
               text:'Eat food'
           } 
        },{
            returnOriginal:false
        }).then(function(res){
            console.log(res.value);
            
        })
    }
    client.close();
});