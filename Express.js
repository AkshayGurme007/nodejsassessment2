const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.write("Home Page");
  res.write(JSON.stringify({ Name: "Akshay" }));
  res.end();
});

app.get("/api/main", function (req, res) {
  res.send(
    "<h1>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</h1>"
  );
});

app.listen(4004);
