const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require("./middleware/errors");

var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    ()=>{
        console.log("Database Connected");
    },
    (error)=>{
        console.log("Database can`t connected:" + error);
    }
);

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use("/api", require("./routes/app.routes"));
app.use(errors.errorHandler);

app.listen(process.env.PORT || 4000, function(){
    console.log("Ready to Go!");
});