
var resolve   = require('path').resolve;
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('localhost:27017/app', ['rooms','contactlist', 'rooms','userList','subjects']);
var bodyParser = require('body-parser');
var logger = require('morgan');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());



//rooms db
app.get('/rooms', function (req, res) {
    console.log('I received a GET request');

    db.rooms.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/rooms', function (req, res) {
    console.log(req.body);
    db.rooms.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/rooms/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.rooms.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/rooms/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.rooms.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/rooms/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.rooms.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {fullName: req.body.fullName, roomName: req.body.roomName, urlAddon: req.body.urlAddon}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});


//ScheduleList db
/*app.get('/schedules', function (req, res) {
    console.log('I received a GET request');

    db.schedules.find(function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ a: 1 }, null, 3));
        console.log(docs);
        res.json(docs);
    });
});

app.post('/schedules', function (req, res) {
    console.log(req.body);
    db.schedules.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/schedules/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.schedules.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/schedules/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.schedules.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/schedules/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.schedules.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});*/
//users

app.get('/userList', function (req, res) {
    console.log('I received a GET request');

    db.userList.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/userList', function (req, res) {
    console.log(req.body);
    db.userList.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/userList/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.userList.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/userList/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.userList.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/userList/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.userList.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username, password: req.body.password}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});

//contactList db
app.get('/contactlist', function (req, res) {
    console.log('I received a GET request');

    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/contactlist', function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.contactlist.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});
//subjects

//contactList db
app.get('/subjects', function (req, res) {
    console.log('I received a GET request');

    db.subjects.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/subjects', function (req, res) {
    console.log(req.body);
    db.subjects.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/subjects/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.subjects.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.get('/subjects/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.subjects.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/subjects/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.subjects.findAndModify({
            query: {_id: mongojs.ObjectId(id)},
            update: {$set: {name: req.body.name, teacher: req.body.teacher, room: req.body.room, events: req.body.events}},
            new: true}, function (err, doc) {
            res.json(doc);
        }
    );
});

// get all data/stuff of the body (POST) parameters
app.use(logger('dev'));  // log every request to the console
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

app.listen(8080);
console.log("Server running on port 8080");