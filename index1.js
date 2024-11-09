//1.install npm init - y
//2.check package.json add type = module
//3.install npm i express and nodemon
//4.add "start" = nodemon under "scripts"
//5.run in terminal with nodemon start
//import express using es mosdule //or common js const express = require('express')
import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  // slash is route root
  res.send(
    "<h1>We are Group 13!</h1><br> <p>Saipetch Damrongvongsawang </p> <br> <p>Lucas El Fakih Coutinho </p> <br> <p>Kashish Puri</p>"
  );
});

app.listen(port, () => {
  console.log(`The running port is http://localhost:${port}`);
});

export {
  app
}