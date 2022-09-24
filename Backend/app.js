const express  = require("express");
const cors = require ('cors');
const CourseData=require('./model/courseData')
const app = new express();

app.use(cors());
app.use(express.json());

app.post('/addcourse',function(req,res){
var thing = {
    coursetitle:req.body.coursetitle,
    coursedecription:req.body.coursedecription,
    coursename:req.body.coursename,
    coursevenue:req.body.coursevenue,
    courseduration:req.body.courseduration   
}
var data = CourseData(thing);
data.save();
CourseData.find().then(function(data){
    res.send(data);
})
})

app.listen(3000, function(){
    console.log('listening to port 3000');
});

