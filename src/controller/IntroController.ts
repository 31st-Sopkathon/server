import { IntroCreateDTO } from '../interface/IntroCreateDTO';
import { Request, Response } from "express";
import { IntroService } from "../service";

/**
 * @route Method /x-introduction
 * @desc x-자기소개서 생성
 * @access Public
 */
const createIntro = async (req: Request, res: Response) => {
    const introCreateDTO: IntroCreateDTO = req.body;

    const data = await IntroService.createIntro(introCreateDTO);

    if(!data) {
      return res.status(404).json({ status: 404, message: "x-소개서 생성 실패" });
    }
    return res. status(200).json({ status: 200, message: "x-소개서 생성 성공", data});
}


const userController = {
    createIntro,
};

export default userController;
