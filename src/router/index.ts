import { Router } from "express";
import IntroRouter from "./IntroRouter";

const router: Router = Router();

router.use("/x-introduction", IntroRouter);

export default router;
