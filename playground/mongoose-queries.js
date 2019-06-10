var mongoose=require('./../server/db/mongoose');
var Todo=require('./../server/models/todo').Todo;
//object destructing syntax for above
//var {Todo}=require('./../server/models/todo');
var {ObjectId}=require('mongodb');

var id='5cfdedb2c0f86e02fad84ae5';

Todo.find({
    completed:true,
    text:'Walk the dog'
}).then((documents)=>{
    console.log(documents);
    
},(err)=>{
    console.log(err);
});
// Todo.findById(id).then((document)=>{
//     if(!document){
//         return console.log("Id not found");
//     }
//     console.log(document);
    
// }).catch((err)=>{
//     console.log(err);
    
// });