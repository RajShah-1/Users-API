const requestLogger = (req, res, next) => {
    console.log("--------------------------------------------------");
    console.log("Request Method: "+ req.method);
    console.log("Request Path: "+ req.path);
    console.log("Request Body: "+ JSON.stringify(req.body));
    console.log("--------------------------------------------------");
    next();
};

const unknownEndpoint = (req, res) => {
  return res.status(404).send({error: 'unknown end point'});
};

const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    console.log(err.stack);
    res.status(500).json(err.message);
};

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
};
