const express = require("express");
const routes = express.Router();
const songController = require("./src/controller/songController");

routes.get("/", songController.index);
routes.post("/", songController.save);
routes.get("/edit/:id", songController.edit);
routes.post("/edit/:id", songController.update);
routes.get("/remove/:id", songController.delete);

module.exports = routes;
