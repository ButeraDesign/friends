let express = require("express");
let app = express();
const path = require("path");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Define the Static Folder:

app.use(express.static(__dirname + '/public/dist'));
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/friends');
mongoose.Promise = global.Promise;

var friendsSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  bday: {type: Date, required: true},
}, {timestamps: true});

mongoose.model('Friend', friendsSchema);
var Friend = mongoose.model('Friend');

// Here we're hardcoding data for simplicity, but normally this would be modularized and the data would be coming from your database.
//var friends = [{name: "Kermit", color: "green"}, {name: "Miss Piggy", color: "pink"}, {name: "Gonzo", color: "blue"}];

// Routes could be modularized, but for now we'll put it here
// You can use your fat arrow functions if you like!
app.get('/friends', function(req, res){
  Friend.find({}, function (err, friend){
    console.log("server", friend)
    res.json(friend);
  })
})


//process route
app.post('/createFriend', function(req, res){
  console.log("POST DATA", req.body);
  var theFriend = new Friend({firstName: req.body.firstName, lastName: req.body.lastName, bday: req.body.bday});
  console.log("NEW FRIEND");
  theFriend.save(function(err){
    if(err){
      console.log('error');
      console.log(theFriend.errors);
      res.render('new', {title: 'you have errors!', errors: theFriend.errors})
    }
    else{
      console.log('success');
      res.redirect('/');
    }
  })
});

app.post('/editFriend/:id', function(req, res){
   console.log("EDIT ID");
   console.log(req.params.id);

   Friend.update({_id: req.params.id}, {firstName: req.body.firstName, lastName: req.body.lastName, bday: req.body.bday}, function(err){
     if(err){
       // console.log('error')
      //  console.log(friend.errors);
       console.log('errors')
     }
     else{
       console.log('success')
      //  console.log(friend);
       res.redirect('/')
     };

   });
 });


app.get('/delete/:id', function(req, res){
    console.log("DELETE ID");
   console.log(req.params.id);


   Friend.findByIdAndRemove(req.params.id, function (err, theDog) {
     if(err){
       // console.log('error')
       console.log(theFriend.errors);
       res.render('index', {title: 'you have errors!', errors: theFriend.errors})
     }
     else{
       console.log('success')
       res.redirect('/');
     };

   });
 });


 app.get('/showFriend/:id', function(req, res){

    console.log("id:",req.params.id);

    Friend.findOne({_id: req.params.id} , function(err, theFriend){
      if(err){
        // console.log('error')
        console.log(theFriend.errors);
        res.render('index', {title: 'you have errors!', errors: theFriend.errors})
      }
      else{
        console.log('success')
        console.log(theFriend);
        res.json(theFriend)
      }

    });//findOne ends
  });//get ends


app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(8000);
