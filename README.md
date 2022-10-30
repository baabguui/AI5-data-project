## `개요`

### 1. 프로젝트 목표

저희 프로젝트의 목표는 웹이용자들에게 탄소배출의 위험성을 인식시켜주고 탄소발자국 줄이기라는 챌린지를 개인 혹은 다수가 참가할 수 있도록 커뮤니티를 제공해주는 것입니다.

### 2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개

탄小 / 저탄소 생활 챌린지!

### 3 팀 구성원의 전체 이름과 역할

| 이름         | 역할       |
| ------------ | ---------- |
| 김영준       | 프론트엔드 |
| 이지원       | 프론트엔드 |
| 류지윤       | 프론트엔드 |
| 이안토니의호 | 프론트엔드 |
| 임지원       | 백엔드     |
| 홍지민       | 백엔드     |

### 4. 기술 스택

#### - 공통

1. eslint
2. prettier

#### - 프론트엔드

1. React
2. Styled-Components
3. Recoil
4. Axios
5. Recharts
6. React-Router-Dom
7. React-Icons
8. typescript

#### - 백엔드

1. Numpy
2. Pandas
3. Matplotlib
4. mySQL
5. prisma ORM
6. Node.js
7. Express
8. Bycrypt
9. Dotenv

## **`데이터세트`**

### 1. 사용할 데이터 세트 및 링크

[연간 해수면 높이](http://www.climate.go.kr/home/09_monitoring/marine/sl_alt)
[이산화탄소와 온실가스 배출량 (각 나라별, 1750-2019)](https://www.kaggle.com/datasets/srikantsahu/co2-and-ghg-emission-data)
[지구온난화 / 온도 변화 / 기후 변화](https://www.kaggle.com/datasets/sevgisarac/temperature-change)
[세계 이산화탄소 배출량](https://www.kaggle.com/code/gcmadhan/carbon-emission-by-country)
[식품 별 탄소생산량](https://www.kaggle.com/datasets/selfvivek/environment-impact-of-food-production)
[1인당 전력 소비량](https://www.index.go.kr/unify/idx-info.do?idxCd=4291)

### 2. 사용할 데이터 세트를 통해 얻고자 하는 인사이트

-   탄소 배출량으로 인한 환경 문제의 가속화를 확인합니다. 개인이 배출하는 탄소를 일상생활 측면에서 파악하고 이를 줄였을 때 환경 보전에 도움이 되는 정도를 수치화 합니다.

### 3. 데이터 세트 분석 과정 중 예상되는 어려움

-   지구온난화에 영향을 미치는 요인이 여러개가 존재해서 특정 요인만으로 정확한 수치화가 어려울거 같습니다.

## **`문제 정의와 가설 설정`**

현 시대의 주요 환경문제 의제는 기후 변화이며 실질적으로 생존을 위협하는 경제적인 문제로 다가오고 있다.  UN 산하 「기후변화에 관한 정부 간 협의체(IPCC)는 이러한 급격한 기후변화를 촉진시키는 원인으로 온실가스 배출량 때문이라고 보고했고(2014년), 금세기 내에 티핑포인트를 넘지 않도록 제한하기 위해선 2030년까지 온실가스 배출량을 절감해야 한다고 주장한다. 온실가스(GreenHouse Gas, GHG)를 정의한 교토의정서에서 규정한 6대 온실가스 중, 이산화탄소(CO2)는 전체 온실가스중 76%에 해당될 만큼 배출량이 가장 많아 기후변화에 영향을 끼치는 가장 큰 요인으로 꼽힌다. 현재 대한민국 국민 1인당 이산화탄소 총배출량은 매년 증가하는 추세에 있으며, 20년 기준으로 1인당 약 11.1톤으로 집계되며, 이는 전 세계에서 16번째 순위이다.(The World Bank,2020) 즉, 개인의 영역에서도 탄소 배출을 절감할 필요성이 있다고 할 수 있다. 본 프로젝트에서는 예의 맥락에서 기후변화의 요인 중 이산화탄소 배출을 가장 큰 요인으로 가정하고, 일상생활에서의 탄소배출을 줄이는 행위가 기후변화 대응에 긍정적으로 작용한다고 가정한다. 현재 개인이 할 수 있는 노력의 일환으로 교통, 냉난방, 전기, 자원 분야에서 다양한 실천방안이 제시되고 있다. 예컨데, 한국 기후환경 네트워크에 따르자면, 가까운 거리는 승용차 대신 도보를 이용한다면 연간 약 25.1Kg의 Co2.를 절감하여 3.8그루의 나무를 심는 것과 같은 효과를 기대할 수 있다.

> 참고문헌

(1)[IPCC 기후변화 2014년 종합보고서](https://www.ipcc.ch/site/assets/uploads/2018/02/ar5-syr-spm_korean.pdf)
(2)[CO2 emissions (metric tons per capita)(2020)](https://data.worldbank.org/indicator/EN.ATM.CO2E.PC)
(3)[State of the climate](https://www.unep.org/explore-topics/climate-action/what-we-do/climate-action-note/state-of-climate.html?gclid=Cj0KCQjwkOqZBhDNARIsAACsbfKGX75a6dAMXx8RGR_COa5yDN_qWNqomftipFlrl2XP-CQW-aGvFtEaArtyEALw_wcB)
(4)[온실가스(GHG)(환경부)](https://www.me.go.kr/home/web/dictionary/read.do?pagerOffset=0&maxPageItems=10&maxIndexPages=10&searchKey=&searchValue=&menuId=10448&orgCd=&condition.createDeptName=%EC%98%A8%EC%8B%A4%EA%B0%80%EC%8A%A4&boardMasterId=&dicSeq=896&decorator)
(5)[Global Manmade Greenhouse Gas Emissions by Gas, 2015](https://www.c2es.org/content/international-emissions/)
(6)[탄소중립 생활 실천 방안(한국 기후환경 네트워크)](https://www.kcen.kr/USR_main2016.jsp??=life/life02)


## **`서비스 설명`**

1. 데이터분석 웹 서비스의 최종적인 메인기능과 서브기능

-   메인 기능

    1.  로그인
    2.  회원가입
    3.  아이디 / 비밀번호 찾기
    4.  유저 정보 변경
    5.  마이페이지
    6.  탄소발자국 줄이기 챌린지를 만들고 참가할 수 있는 게시판
    7.  댓글
    8.  신고기능
    9.  참가기능
    10. 챌린지를 만들 수 있는 폼

-   서브 기능
    1.  정렬
    2.  검색
    3.  메일로 유저 계정 찾기
    4.  유저들이 원하는 챌린지를 신청할 수있는 게시판

2. 웹 서비스의 사용자가 데이터 분석 시각화 자료를 통해 얻는 인사이트
    - 이산화탄소가 지구의 환경에 미치는 영향을 직관적으로 알 수 있게되고 작은 실천부터 해나가야됨을 인식시켜줍니다.

## **`스토리보드 & 시나리오`**

-   와이어프레임을 작성하여 링크를 삽입합니다. (whimsical, figma 등)
