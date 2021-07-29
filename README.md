# <div align="center"> Twitter-Clone-Coding </div>
<div align="center"> 트위터 클론 코딩</div>

# <div align="center"> ✔ Tech Stack </div>


<div align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp 
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/></a>&nbsp 

</div>

# <div align="center"> 👀 Dev log </div>
(1) 2021-07-26


![image](https://user-images.githubusercontent.com/47571973/127004406-5e53b3e4-278b-421e-ad8b-cae891583026.png)

프로젝트에 필요한 Firebase 세팅과 기본 Router 코드 작성

(2) 2021-07-27
![image](https://user-images.githubusercontent.com/47571973/127162638-690e205c-31f1-4948-b0ee-6b09fe6cd993.png)
회원 가입을 위한 버튼을 만들고, data를 console에 찍어보았다. 잘 동작한다.

![image](https://user-images.githubusercontent.com/47571973/127162803-2aac1ba4-0586-48c6-8048-127cf81832a8.png)
그리고, Firebase authentication console에서 제대로 유저가 가입되었다는 것을 확인할 수 있다.

(3) 2021 -07-28
![image](https://user-images.githubusercontent.com/47571973/127269105-5068fcd2-ba58-4666-b0c8-8fb2ca21ec62.png)
회원 가입할 때, 에러 핸들링. 에러 발생 시 에러 메세지를 옆에 표시한다.

![image](https://user-images.githubusercontent.com/47571973/127269370-a6b00233-fc29-45e9-a994-4ec751ee4430.png)
구글로 회원가입하기를 누르면, 팝업 창이 뜨며 구글 계정을 선택할 수 있도록 한다.

![image](https://user-images.githubusercontent.com/47571973/127269479-94c87834-825c-4022-8260-f33020317cdc.png)
구글로 회원가입을 하면, Firebase authentication console에서는 제공 업체(provider)에 구글 표시가 뜬다.

![image](https://user-images.githubusercontent.com/47571973/127269579-d1b54744-9b96-4788-919e-877a43a72934.png)
깃허브로 회원가입을 하면, 다음과 같은 팝업창이 뜨며 권한을 줄 것인지 뜬다.

![image](https://user-images.githubusercontent.com/47571973/127269778-6f73c028-523b-4027-8515-cc28ce4943cb.png)
Firebase authentication console에서 제공업체가 깃허브로 표시된다.

![image](https://user-images.githubusercontent.com/47571973/127271653-37702ec6-4f2f-44e3-8492-c35ab969ac95.png)

로그아웃 버튼 생성. 로그아웃 버튼을 클릭하면 로그인 화면으로 redirect되도록 하였다.

![image](https://user-images.githubusercontent.com/47571973/127278051-a0da2298-08ba-4902-954e-c84f406493e8.png)

firebase storage를 생성하여 트윗 내용들을 저장할 예정이다.

![image](https://user-images.githubusercontent.com/47571973/127277748-48a58ca4-c70c-4733-94b8-eb8d2ca9c45e.png)

트윗을 작성하는 폼과 버튼을 생성한다.

![image](https://user-images.githubusercontent.com/47571973/127277814-f6bd96ee-e36e-493c-8a88-98f60aa138d6.png)

트윗 내용을 작성하고 엔터를 누르면

![image](https://user-images.githubusercontent.com/47571973/127277866-146ba060-1ca8-4215-8408-5e4598c9b4a9.png)

다시 빈 화면이 됨과 동시에

![image](https://user-images.githubusercontent.com/47571973/127277945-615431aa-4912-4235-b7e7-c10e5a2465bc.png)

firebase storage에 업데이트 된다.

(3) 2021-07-29
![image](https://user-images.githubusercontent.com/47571973/127418043-77e3ed33-2883-4194-a402-45ec5a2eb417.png)

트윗 삭제/ 수정버튼 추가 -> 삭제를 누르면 정말 삭제할 것이냐는 경고창이 뜬다.
![image](https://user-images.githubusercontent.com/47571973/127418656-068175bb-63ea-49f7-8950-96d4299ab421.png)

삭제하기를 누르면 보는 것처럼 화면에서도 삭제되고, 
![image](https://user-images.githubusercontent.com/47571973/127418706-69ce7546-6ced-4aa2-b29d-3c81bed9e1d4.png)

firestorage console에서도 삭제된다.
![image](https://user-images.githubusercontent.com/47571973/127420008-2b6eb94f-1cc2-4da3-8475-7adb22e63ea7.png)

또한, 수정하기를 누르면 다음과 같이 수정하는 새로운 form이 열린다.
![image](https://user-images.githubusercontent.com/47571973/127422980-177b07ea-609f-4f22-b541-af9f2121cdfc.png)

트윗 수정 후 수정하기를 누르면,
![image](https://user-images.githubusercontent.com/47571973/127423094-48e33914-e545-44a0-9e96-864cc1a50d61.png)

화면에서도 수정되고,
![image](https://user-images.githubusercontent.com/47571973/127423141-beb3fdd1-c817-4cff-a0c2-0f54be2ad9cc.png)

firestorage console에서도 수정된다.
