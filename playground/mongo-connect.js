const MongoClient=require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        console.log("Error connecting to db");
        
    }else{
        console.log("Connected successfully");
        const db=client.db('TodoApp');
        // db.collection('todos').insertOne({
        //     text:'Something to do',
        //     completed:false
        // },(err,res)=>{
        //     if(err){
        //         console.log(err);
                
        //     }else{
        //         console.log(res.ops);
                
        //     }
        // });
        db.collection('users').insertOne({
            name:'Yash',
            age:25,
            location:'Mumbai'
        },(err,res)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log(res.ops[0]._id);
                
            }
        });

        
    }
    client.close();
});