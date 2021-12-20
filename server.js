const express = require("express");
const app = express();

app.use(express.static("./dist/e-comm"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/e-comm/" });
});

app.listen(process.env.PORT || 4200);
