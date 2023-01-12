const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require("./middleware/errors");

var bodyParser = require('body-parser');
const multer = require('multer');

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
app.use(multer.json());
app.use(multer.urlencoded());

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded());

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));
app.use("/api", require("./routes/app.routes"));
app.use(errors.errorHandler);

app.listen(process.env.PORT || 4000, function(){
    console.log("Ready to Go!");
});