const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require("./middleware/errors");

const mongoURI = "mongodb+srv://Antonio:QOqC76E93uex9mh5@trainee-links.yhdui9p.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(mongoURI,{
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