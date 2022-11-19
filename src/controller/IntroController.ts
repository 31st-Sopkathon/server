import { IntroCreateDTO } from '../interface/IntroCreateDTO';
import { Request, Response } from "express";
import { userService } from "../service";


//* 유저 정보 생성
const createUser = async (req: Request, res: Response) => {
  const { userName, email, age } = req.body;

  if (!userName || !email || !age) {
    return res.status(400).json({ status: 400, message: "유저 정보 주세요!" });
  }

  const data = await userService.createUser(userName, email, age);

  if (!data) {
    return res.status(404).json({ status: 404, message: "유저 생성 실패" });
  }
  
  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
}

//* x-소개서 생성
const createIntro = async (req: Request, res: Response) => {
    const introCreateDTO: IntroCreateDTO = req.body;

    const data = await IntroService.createIntro(introCreateDTO);
}


const userController = {
    createIntro,
};

export default userController;
