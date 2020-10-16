let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-3xayr.mongodb.net/cat_adoption?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if(err){
        console.log("Error: ", err);
    }
    console.log("Connected To MongoDB Atlas");
 });

// buid schema for the cat and user
var CatUserSchema = mongoose.Schema({
        firstName:{type: String},
        lastName:{type: String},
        email:{type: String},
        phone: {type: Number},
        catBreed:{type: String},
        catID : {type: String},
        imageUrl:{type: String}    
});

var ContactSchema = mongoose.Schema({
    senderName : {type: String},
    senderEmail : {type: String},
    senderMessage :{type: String}
});

 //build models for our schema
let CatUserModel = mongoose.model('Adoption', CatUserSchema);
let ContactModel = mongoose.model('Contact', ContactSchema);
  
module.exports.CatUserModel = CatUserModel;
module.exports.ContactModel = ContactModel;
