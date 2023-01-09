const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require("./middleware/errors");

app.use(express.static("public"));

MongoClient.connect(MONGO_DB_CONFIG.DB,{
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

app.listen(process.env.port || 4000, function(){
    console.log("Ready to Go!");
});