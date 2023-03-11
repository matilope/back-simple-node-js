const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const userRoutes = require("./router/routes");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Allow', 'GET, POST, PUT, DELETE');
  next();
});

// Parse application/json
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use("/api", userRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/userApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("Server working on port: " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise is over");
  });
