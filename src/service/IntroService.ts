import { IntroCreateDTO } from './../interface/IntroCreateDTO';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
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
    userName: data.user_name,
    category: data.category,
    status: data.status,
    wantReason: data.want_reason,
    cannotReason: data.cannot_reason,
    term: data.term
  };
};

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const encryptedPassword = await bcrypt.hash(password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화
  return encryptedPassword;
};


const userService = {
  createIntro,
};

export default userService;
