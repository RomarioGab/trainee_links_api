const { response } = require("express");
const { link } = require("../models/links.model");

async function createLink(params, callback) {
    if (!params.link_title){
        return callback(
            {
                message: "Title required",
            },
            ""
        );
    }

    const linkModel = link(params);
    linkModel
        .save()
        .then((response)=> {
            return callback(null, response);
        })
        .catch((error)=> {
            return callback(error);
        });
}

async function getlink(params, callback) { // get all links on database
    const link_title= params.link_title;
    var condition = link_title
    ? {
        link_title: {$regrex: new RegExp(link_title), $option: "i"},
      }
    : {};

    link
        .find(condition)
        .then((response)=> {
            return callback(null, response);
        })
        .catch((error)=> {
            return callback(error);
        });
}

async function getLinkById(params, callback) {
    const link_id = params.link_id; //ver 

    link
        .findById(link_id)
        .then((response)=> {
            if(!response) callback("Error id!");
            else return callback(null, response);
        })
        .catch((error)=> {
            return callback(error);
        });
}

async function updateLink(params, callback) {
    const link_id = params.link_id; //ver 

    link
        .findByIdAndUpdate(link_id, params, {useFindAndModify: false})
        .then((response)=> {
            if(!response) callback("Error id!");
            else return callback(null, response);
        })
        .catch((error)=> {
            return callback(error);
        });
}

async function deleteLink(params, callback) {
    const link_id = params.link_id; //ver 

    link
        .findByIdAndRemove(link_id)
        .then((response)=> {
            if(!response) callback("Error id!");
            else return callback(null, response);
        })
        .catch((error)=> {
            return callback(error);
        });
}

module.exports = {
    createLink,
    getlink,
    getLinkById,
    updateLink,
    deleteLink
};