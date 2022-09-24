const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://tiya:post24@cluster0.qh8z9se.mongodb.net/courseDB?retryWrites=true&w=majority');
const CourseSchema = mongoose.Schema({
    coursetitle:String,
    coursedecription:String,
    coursename:String,
    coursevenue:String,
    courseduration:String
})

var CourseData = mongoose.model('courseset',CourseSchema);
module.exports=CourseData;