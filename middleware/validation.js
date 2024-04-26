function validation(req, res, next) {
    if (req.token) {
        console.log("Validation successfully");
        next();
        return;
    }
}

module.exports = validation;