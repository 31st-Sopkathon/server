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
| x 소개서 조회 | [POST] /x-introduction/:introductionId | `전선희` | 
| x 소개서 상태값 조회 | [GET] /x-introduction/:introductionId/status | `김소현` | 
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
3. remote - name_#feature 에 Push
4. remote - name 으로 PR
5. remote - develop 으로 PR
6. 코드 리뷰 후 Confirm 받고 remote - develop Merge
7. remote - develop 에 Merge 될 때 마다 모든 팀원 local - develop pull 받아 최신 상태 유지
 ```

</div>
</details>


| Branch Name | 설명 |
| :---: | :-----: |
| main | 초기 세팅 존재 |
| develop | 구현 완료 브랜치 |
| sohyeon | 소현 개인 브랜치 |
| hanbit | 한빛 개인 브랜치 |
| name_#issue | 이슈 별 기능 구현 브랜치 |
