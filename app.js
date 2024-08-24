const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/users", userRoutes);

app.use("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
    res.send("Route not found");
});

module.exports = app;
