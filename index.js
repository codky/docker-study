const express = require("express");
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.json("hi world");
});

app.listen(PORT, () => {
    console.log("서버 가동");
});