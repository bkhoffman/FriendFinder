const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });
// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

app.listen(PORT, function(){
  console.log("app listening on PORT "+ PORT);
})
