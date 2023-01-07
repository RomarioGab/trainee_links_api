const mongoose = require("mongoose");

const link = mongoose.model(
    "link",
    mongoose.Schema({
        link_title: String,
        link_url: String,
    },
    {
        timestamps: true,
    })
);

module.exports = {
    link
}