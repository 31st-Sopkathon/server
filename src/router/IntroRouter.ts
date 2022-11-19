import { Router } from "express";
import { IntroController } from "../controller";
import { body } from "express-validator";

const router: Router = Router();

//* x-소개서 생성 POST /x-introduction
router.post(
    "/",
    [
        body("password").isLength({ min: 4, max: 4 }),
        body("userName").notEmpty(),
        body("category").notEmpty(),
        body("wantReason").notEmpty(),
        body("cannotReason").notEmpty(),
        body("term").notEmpty(),
    ],
    IntroController.createIntro);

export default router;
