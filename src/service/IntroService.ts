import { IntroCreateDTO } from './../interface/IntroCreateDTO';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();


//* x-자기소개서 생성
const createIntro = async (introCreateDTO: IntroCreateDTO) => {
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(introCreateDTO.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화
 
  const data = await prisma.x_introduction.create({
    data: {
      user_name: introCreateDTO.userName,
      category: introCreateDTO.category,
      password,
      status: "ing",
      want_reason: introCreateDTO.wantReason,
      cannot_reason: introCreateDTO.cannotReason,
      term: introCreateDTO.term
    }
  });

  const data2 = await prisma.x_introduction.findUnique({
    where: {
      introduction_id: data.introduction_id,
    },
    select: {
      introduction_id: true,
      user_name: true,
      category: true,
      status: true,
      password: false,
      want_reason: true,
      cannot_reason: true,
      term: true
    }
  })

  return data2;
}



const userService = {
  createIntro,
};

export default userService;
