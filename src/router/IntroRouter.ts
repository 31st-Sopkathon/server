import { Router } from "express";
import { IntroController } from "../controller";
import { body } from "express-validator";

const router: Router = Router();

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
    IntroController.createIntro
);

router.post(
    "/:introductionId",
    [body("password").notEmpty()],
    IntroController.getIntro
);

router.patch(
    "/:introductionId/status",
    [body("status").notEmpty()],
    IntroController.updateIntroStatus
);

export default router;
