const express = require("express");

const app = express();
const port = 7000;

const routerJam = require("./jam");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/about", (req, res) => {
  res.send("about");
});
app.use(routerJam);

app.listen(port, () => {
  console.log("Server berjalan di port " + port);
});
