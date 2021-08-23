import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

export const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const surveysUsersController = new SendMailController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", surveysUsersController.execute);
