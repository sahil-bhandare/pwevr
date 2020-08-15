var express = require("express");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 5000;
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended:true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const mongoURI = 'mongodb+srv://pwevr:pwevr123@cluster0.b2rbt.gcp.mongodb.net/subscribe';

mongoose
    .connect(mongoURI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port,function() {
  console.log("Server is running on Port "+ port + ".");
});
