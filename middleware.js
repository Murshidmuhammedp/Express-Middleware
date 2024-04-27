const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const token = require("../Express middleware/middleware/token");
const validation = require("../Express middleware/middleware/validation");
app.use(dategeneration)

const middleware = [token, validation]

app.get("/", middleware, (req, res) => {
    console.log("User logged");
    res.send("<h1>Welcome user</h1>");
});

function dategeneration(req, res, next) {
    console.log(new Date());
    next();
}

app.listen(PORT, () => {
    console.log(`server running PORT : ${PORT}`);
}); 