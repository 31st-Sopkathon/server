import { success } from './../constants/response';
import { IntroCreateDTO } from '../interface/IntroCreateDTO';
import { Request, Response } from "express";
import { IntroService } from "../service";
import { rm, sc } from '../constants';
import { fail } from '../constants/response';
import { validationResult } from "express-validator";

/**
 * @route  POST/x-introduction
 * @desc x-자기소개서 생성
 * @access Public
 */
const createIntro = async (req: Request, res: Response) => { 
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const introCreateDTO: IntroCreateDTO = req.body;
  try {
    const data = await IntroService.createIntro(introCreateDTO);

    if(!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res. status(sc.OK).send(success(sc.OK, rm.INTRODUCTION_SUCCESS, data));

  } catch (e) {
    console.error(e);
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};


/**
 * @route  POST /x-introduction/:introductionId
 * @desc x-자기소개서 생성
 * @access Public
 */
const getIntro = async (req: Request, res: Response) => {
  const { introductionId } = req.params;
  if (!introductionId) {
    res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }
  const { password } = req.body;

  try {
    const data = await IntroService.getIntro(+introductionId, password);

    if (data === sc.NOT_FOUND) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }

    if (data === sc.BAD_REQUEST) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }

    return res.status(sc.OK).send(success(sc.OK, rm.GET_INTRODUCTION_SUCCESS, data));

  } catch (e) {
    console.error(e);
    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
}

const userController = {
  createIntro,
  getIntro,
};

export default userController;
