var mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose
  .connect("mongodb://localhost:27017/volunteer", { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error",err);
  });

var VolunteerSchema = mongoose.Schema({
  firstName: { type: String ,unique:true },
  lastName: { type: String,unique:true },
  email: { type: String },
  adress: { type: String },
  mobile: { type: Number },
  message: { type: String },
  CheckedDays: { type: String }
 
});
var VolunteerInfo = mongoose.model("VolunteerInfo", VolunteerSchema);

function saveData(recievedObj) {
  var {
    firstName,
    lastName,
    email,
    adress,
    mobile,
    message,
    CheckedDays
  } = recievedObj
  let infoVolunteer = new VolunteerInfo({
    firstName,
    lastName,
    email,
    adress,
    mobile,
    message,
    CheckedDays
  });
  infoVolunteer.save((err) => {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("DONE");
    }
  });
}


module.exports.saveData = saveData