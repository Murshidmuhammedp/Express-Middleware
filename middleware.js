const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

const middleware = [token, validation]

app.get("/", middleware, (req, res) => {
    console.log("User logged");
    res.send("<h1>Welcome user</h1>");
});

app.listen(PORT, () => {
    console.log(`server running PORT : ${PORT}`);
})