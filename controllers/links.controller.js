const linkServices = require("../services/links.services");

exports.create = (req, res, next) => {

    var model = {
        link_title: req.body.link_title,
        link_url: req.body.link_url,
    };

    linkServices.createLink(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};

exports.findAll = (req, res, next) => {

    var model = {
        link_title: req.query.link_title,
    };

    linkServices.getlink(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};

exports.findOne = (req, res, next) => {

    var model = {
        link_title: req.params.bilheteV_id,
    };

    linkServices.getLinkById(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};

exports.findOne = (req, res, next) => {

    var model = {
        link_id: req.params.id,
    };

    linkServices.getLinkById(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};

exports.update = (req, res, next) => {
    // const url = req.protocol +  "://" + req.get("host");
   // const path = req.file != undefined ? req.file.path.replace(/\\/g,"/") : "";

    var model = {
        link_id: req.params.id,
        link_title: req.body.link_title,
        link_url: req.body.link_url,
    };

    linkServices.updateLink(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};

exports.delete = (req, res, next) => {

    var model = {
        link_id: req.params.id,
    };

    linkServices.deleteLink(model, (error, results) => {
        if (error){
            return  next(error);
        }else{
            return  res.status(200).send({
                message: "Success",
                data: results
            });
        }
    });
};