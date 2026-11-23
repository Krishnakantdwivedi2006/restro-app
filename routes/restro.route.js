import express from "express";
import RestroController from "../controller/restro.controller.js";

const restroRouter = express.Router();

restroRouter.post("/menu", RestroController.addMenuItem);
restroRouter.get("/menu", RestroController.getMenuItems);

export default restroRouter;
