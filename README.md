# My X-Introduction
나의 X 소개서 : 내가 해보고 싶었지만 아직 해보지 못했던 활동 ‘X’에 대한 목표를 세우고 달성하게 도와주는 서비스

## IN SOPT Sopkathon - Group 4
### 🛠 Used Stacks
 ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
 ![PRISMA](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white) 
 ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
 
 
### 🧑‍💻 Developers
| 김소현 | 전선희 |
| :---: | :---: | 
|[thguss](https://github.com/thguss)|[funnysunny08](https://github.com/funnysunny08)| 


 ### 🐾 Roles
| 기능명 | 엔드포인트 | 담당자 |
| :-----: | :---: | :---: |
| x 소개서 생성 | [POST] /x-introduction | `전선희` | 
| x 소개서 조회 | [POST] /x-introduction/:introductionId | `김소현` | 
| x 소개서 상태값 업데이트 | [PATCH] /x-introduction/:introductionId/status | `김소현` | 


### ⌨️ Code Convention

<details>
<summary>변수명</summary>   
<div markdown="1">
 
 1. Camel Case 사용 
   - lower Camel Case
 2. 함수의 경우 "동사+명사" 사용 
   - ex) getStatus()
 3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성 
   - ex) isExist
 4. 약어는 되도록 사용하지 않는다.
   - 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.
 
</div>
</details>

<details>
<summary>주석</summary>
<div markdown="1">       

 1. 한줄 주석은 // 를 사용한다.
  ```typescript
    // 한줄 주석일 때
    /**
    * 여러줄
    * 주석일 때
    */
  ```
 2. 함수에 대한 주석
  ```typescript
    /**
     * @route Method /Route
     * @desc Function Description
     * @access Public
   */
  ```
 3. Bracket 사용 시 내부에 주석을 작성한다.
  ```typescript
    if (a == 5) {
	  // 주석
    }
  ```
 
</div>
</details>

<details>
<summary>Bracket</summary>
<div markdown="1">       

 1. 한줄 if 문은 여러 줄로 작성한다. 
  
 ``` typescript
 // 한줄 if 문 - 여러 줄로 작성
  if(trigger) {
    return;
  }
 ```
  2. 괄호는 한칸 띄우고 사용한다. 
  
 ``` typescript 
 // 괄호 사용 한칸 띄우고 사용한다.
  if (left == true) {
     return;
  }
 ```
  3. Bracket 양쪽 사이를 띄어서 사용한다.
 ``` typescript 
  const { userId } = request.user;
 ```
 
</div>
</details>

<details>
<summary>비동기 함수의 사용</summary>
<div markdown="1">       

 1. async, await 함수 사용을 지향한다.
 2. Promise 사용은 지양한다.
 3. 다만 로직을 짜는 데 있어 promise를 불가피하게 사용할 경우, 주석으로 표시하고 commit에 그 이유를 작성한다.
 
</div>
</details>


### 🌿 Branch Strategy

<details>
<summary>Git Workflow</summary>
<div markdown="1">       

```
main → develop → feature/#issue_num
issue_num : issue 번호에 맞게 생성

1. issue 생성
2. local - feature/#issue_num 에서 각자 기능 작업 (issue_num : issue 번호에 맞게 생성)
3. remote - feature/#issue_num 에 Push
4. remote - develop 으로 PR
5. 코드 리뷰 후 Confirm 받고 remote - develop Merge
6. remote - develop 에 Merge 될 때 마다 모든 팀원 local - develop pull 받아 최신 상태 유지
 ```

</div>
</details>


| Branch Name | 설명 |
| :---: | :-----: |
| main | 초기 세팅 존재 |
| develop | 구현 완료 브랜치 |
| feature/#issue_num | 이슈 별 기능 구현 브랜치 |


### 📌 Commit Convention

##### [TAG] 메시지 => [feature/#issue_num] TAG: commit message

| 태그 이름  |                             설명                             |
| :--------: | :----------------------------------------------------------: |
|  [CHORE]   |                  코드 수정, 내부 파일 수정                   |
|   [FEAT]   |                       새로운 기능 구현                       |
|   [ADD]    | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
|  [HOTFIX]  |             issue나 QA에서 급한 버그 수정에 사용             |
|   [FIX]    |                       버그, 오류 해결                        |
|   [DEL]    |                     쓸모 없는 코드 삭제                      |
|   [DOCS]   |                 README나 WIKI 등의 문서 개정                 |
| [CORRECT]  |       주로 문법의 오류나 타입의 변경, 이름 변경에 사용       |
|   [MOVE]   |               프로젝트 내 파일이나 코드의 이동               |
|  [RENAME]  |                파일 이름 변경이 있을 때 사용                 |
| [IMPROVE]  |                     향상이 있을 때 사용                      |
| [REFACTOR] |                   전면 수정이 있을 때 사용                   |



### 📁 Project Foldering
```
🗃️ 3-Layer Architecture 적용

📁 src _
|_ 📁 constrants _
|_ 📁 controller _
|_ 📁 interface _
|_ 📁 router _
|_ 📁 service _
```

### 🥫 ERD
<img width="308" alt="image" src="https://user-images.githubusercontent.com/55437339/202868015-610f8d41-109d-4c06-be42-85f5ce8e5fb9.png">

### 📚 schema.prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model x_introduction {
  introduction_id Int      @id @default(autoincrement())
  user_name       String   @db.VarChar(200)
  category        String   @db.VarChar(400)
  status          String   @db.VarChar(400)
  password        String   @db.VarChar(400)
  want_reason      String
  cannot_reason    String
  term            DateTime @db.Date

  @@map("x-introduction")
}

```

### 📚 package.json
```
{
  "name": "seminar4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.14",
    "@types/express-validator": "^3.0.0",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "@types/cors": "^2.8.12",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-validator": "^6.14.2",
    "prisma": "^4.6.1"
  }
}

```


### 👷‍♂️ Server Architecture
- 개발 환경 : Typescript, Node  
- 데이터베이스 : Prisma  
- 서버 환경 : AWS EC2, PM2

<img width="844" alt="image" src="https://user-images.githubusercontent.com/55437339/202868209-ff39190e-29a3-48d4-b4ae-d3bc6ac7a42a.png">
