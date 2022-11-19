import { Router } from "express";
import { IntroController } from "../controller";

const router: Router = Router();

//* x-소개서 생성 POST /x-introduction
router.post("/", IntroController.createIntro);

export default router;
