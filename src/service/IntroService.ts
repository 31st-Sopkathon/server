import { IntroCreateDTO } from './../interface/IntroCreateDTO';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sc } from '../constants';
const prisma = new PrismaClient();


//* x-자기소개서 생성
const createIntro = async (introCreateDTO: IntroCreateDTO) => {
  const password = await encryptPassword(introCreateDTO.password);

  const data = await prisma.x_introduction.create({
    data: {
      user_name: introCreateDTO.userName,
      category: introCreateDTO.category,
      password: password,
      status: "ing",
      want_reason: introCreateDTO.wantReason,
      cannot_reason: introCreateDTO.cannotReason,
      term: introCreateDTO.term
    }
  });

  return {
    user_name: data.user_name,
    category: data.category,
    status: data.status,
    want_reason: data.want_reason,
    cannot_reason: data.cannot_reason,
    term: data.term
  };
};

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const encryptedPassword = await bcrypt.hash(password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화
  return encryptedPassword;
};

const getIntro = async (introductionId: number, password: string) => {
  const introduction = await prisma.x_introduction.findUnique({
    where: {
      introduction_id: introductionId
    },
  });

  if (!introduction) {
    return sc.NOT_FOUND;
  }

  const isMatch = await bcrypt.compare(password, introduction.password);
  if (!isMatch) {
    return sc.BAD_REQUEST;
  }

  if (introduction.status == "ing" && introduction.term < new Date()) {
    introduction.status = "fail";
  }

  return {
    userName: introduction.user_name,
    category: introduction.category,
    status: introduction.status,
    wantReason: introduction.want_reason,
    cannotReason: introduction.cannot_reason,
    term: introduction.term
  };
}


const userService = {
  createIntro,
  getIntro,
};

export default userService;
