const express=require('express');
const bodyParser=require('body-parser');

var mongoose=require('./db/mongoose.js');
var Todo=require('./models/todo.js').Todo;
var User=require('./models/user.js').User;
var {ObjectId}=require('mongodb');

var app=express();
var port=process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    console.log(req.body);
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
    
});

app.get('/todos',(req,res)=>{
    Todo.find().then((document)=>{
        res.send({document});
    },(err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!(ObjectId.isValid(id))){
        console.log("in  isValid(id) method");

        res.status(404).send();
    }else{
        Todo.findById(id).then((document)=>{
            console.log("in find by id method");
            
            if(!document){
                res.status(404).send();
            }else{
                res.send({document});
            }
            
        },(err)=>{
            res.status(400).send();
        });
    }
},(err)=>{
    console.log(err);
    
})

app.listen(port,()=>{
    console.log("Listening to port ",port);
    
})

