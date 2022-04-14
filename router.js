const express = require("express");
const routerJam = express.Router();

const controllerJam = require("../controller/jam");

routerJam.route("/jam").get(controllerJam.getJam).post(controllerJam.insert);

routerJam.route("/jam/:tipe").put(controllerJam.update).delete(controllerJam.delete).get(controllerJam.getJamByTipe);

module.exports = routerJam;
