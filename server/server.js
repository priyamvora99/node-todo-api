const express=require('express');
const bodyParser=require('body-parser');

var mongoose=require('./db/mongoose.js');
var Todo=require('./models/todo.js').Todo;
var User=require('./models/user.js').User;


var app=express();
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

app.listen(3000,()=>{
    console.log("Listening to port 3000");
    
})

