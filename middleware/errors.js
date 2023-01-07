function errorHandler(err, req,  res, next){
    // check error type
    if(typeof err === "string"){
        return res.status(400).json({message: err});
    }

    if(err.name === " ValidationError"){
        return res.status(400).json({message: err.message});
    }

    return res.status(500).json({message: err.message});
}

module.exports = {
    errorHandler
}