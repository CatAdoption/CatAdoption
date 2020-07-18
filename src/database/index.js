let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cats',
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
var VolunteerSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String},
    email: { type: String },
    adress: { type: String },
    mobile: { type: Number },
    message: { type: String },
    CheckedDays: { type: String }
   
  });

  var UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String },
    lastName: { type: String},
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    
});


  
 //build models for our schema
let VolunteerModel = mongoose.model("VolunteerInfo", VolunteerSchema);
let CatUserModel = mongoose.model('Adoption', CatUserSchema);
let ContactModel = mongoose.model('Contact', ContactSchema);
let UserModel = mongoose.model('user', UserSchema);
module.exports.CatUserModel = CatUserModel;
module.exports.ContactModel = ContactModel;
module.exports.VolunteerModel = VolunteerModel;
module.exports.UserModel = UserModel;