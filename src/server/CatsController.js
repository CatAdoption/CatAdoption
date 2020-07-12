var db = require('./../database/index.js');
var CatUserModel = db.CatUserModel 

/*
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create a CatUserModelSchema
    const CatUserModelDoc = new CatUserModel({
        cat: req.body.cat,
        user: req.body.user
    });

    // Save Schema in the database
    CatUserModelDoc
    .save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the CatUserModel."
        });
    });
  };
*/

//retrieve all CatUserModelDoc
exports.retrieve = (req, res) => {
    //const id = req.query.id;
    CatUserModel.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving CatUserModelSchemas."
        });
    });
};

//retrieve one CatUserModel
exports.retrieveOne = (req, res) => {
    const id = req.params.id;
      
    CatUserModel.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found CatUserModelSchema with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving CatUserModelSchema with id :" + id });
      });
  };

//delete all CatUserModels
exports.delete = (req, res) => {
  CatUserModel.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} CatUserModelSchemas were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all CatUserModelSchemas."
        });
      });
  };

//delete one CatUserModel
exports.deleteOne = (req, res) => {
    const id = req.params.id;
  
    CatUserModel.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete CatUserModelSchema with id: ${id}. Maybe CatUserModelSchema was not found!`
          });
        } else {
          res.send({
            message: "CatUserModelSchema was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete CatUserModelSchema with id: " + id
        });
      });
  };