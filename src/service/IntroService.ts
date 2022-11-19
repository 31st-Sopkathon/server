import { IntroCreateDTO } from './../interface/IntroCreateDTO';
import { PrismaClient, x_introduction } from "@prisma/client";
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
      term: new Date(introCreateDTO.term)
    }
  });

  return {
    introductionId: data.introduction_id,
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


const updateIntroStatus = async (introductionId: number, status: boolean) => {
  const introduction = await prisma.x_introduction.findUnique({
    where: {
      introduction_id: introductionId
    },
  });

  if (!introduction) {
    return sc.NOT_FOUND;
  }

  if (status) {
    const data = await prisma.x_introduction.update({
      where: {
        introduction_id: introductionId
      },
      data: {
        status: "success"
      }
    });

    return await getUpdatedData(data);
  } else {
    const data = await prisma.x_introduction.update({
      where: {
        introduction_id: introductionId
      },
      data: {
        status: "fail"
      }
    });

    return await getUpdatedData(data);
  }
}

const getUpdatedData = async (data: x_introduction) => {
  return {
    userName: data.user_name,
    category: data.category,
    status: data.status,
    wantReason: data.want_reason,
    cannotReason: data.cannot_reason,
    term: data.term
  };
}


const userService = {
  createIntro,
  getIntro,
  updateIntroStatus
};

export default userService;
