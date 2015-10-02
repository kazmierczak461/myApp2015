// export this module, so that it is accessible to our application modules
module.exports = Cars;

// Cars constructor
function Cars() {
    if (!(this instanceof Cars)) {
        return new Cars();
    }

    // require mongodb
    var mongo = require('mongodb');
    // Connect to our mongodb running on localhost and named 'test'
    var db = require('monk')('localhost:27017/app');
    // obtain a reference to our cars collection within mongodb
    this.cars = db.get('cars');
};
var cars = require('../db/cars')();

// Retrieve a list of all persisted
Cars.prototype.findAll = function(success, error) {
    this.cars.find({},{},response(success, error));
};

// Retrieve a car by its id
Cars.prototype.findById = function(id, success, error) {
    this.cars.findById(id, response(success,error));
};

// Persist a new car document to mongodb
Cars.prototype.create = function(car, success, error) {
    this.cars.insert(car, response(success,error));
};

// Update an existing car document by id in mongodb
Cars.prototype.update = function(car, success, error) {
    this.cars.findAndModify(car._id,
        { $set: { name: car.name } }, response(success, error));
};

// Remove a car by id from the mongodb
Cars.prototype.removeById = function(id, success, error) {
    this.cars.remove({_id : id}, response(success, error));
};

// Callback to the supplied success and error functions
// The caller will supply this function. The callers implementation
// will provide the necessary logic. In the case of the sample app,
// the caller's implementation will send an appropriate http response.
var response = function(success, error) {
    return function(err, doc) {
        if (err) {
            // an error occurred, call the supplied error function
            error(err);
        } else {
            // call the supplied success function
            success(doc);
        }
    };
}