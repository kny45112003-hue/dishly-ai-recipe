# AI 여행 추천 서비스 앱

사용자의 여행 취향을 바탕으로  
**맞춤 여행지와 일정 흐름을 제안하는 AI 여행 추천 서비스 UI 프로젝트**입니다.

> 사용자는 여행 스타일을 선택하고, 추천 여행지를 확인한 뒤, 상세 일정과 저장 기능을 통해 여행 계획을 탐색할 수 있습니다.

---

## 프로젝트 링크

| 구분             | 링크                                                                         |
| ---------------- | ---------------------------------------------------------------------------- |
| GitHub           | https://github.com/joona0306/ai-travel-service                               |
| 배포 페이지      | https://joona0306.github.io/ai-travel-service/                               |
| Notion 기획 문서 | https://unexpected-sheep-e3c.notion.site/AI-32cd8ef246b780cfa1e0fc78ea48bbb7 |

---

## 프로젝트 개요

| 항목        | 내용                                                   |
| ----------- | ------------------------------------------------------ |
| 프로젝트명  | AI 여행 추천 서비스 앱                                 |
| 서비스명    | RoamAI                                                 |
| 유형        | 반응형 웹 기반 여행 추천 서비스                        |
| 핵심 기능   | 여행 취향 선택, AI 추천 여행지, 상세 일정, 저장한 여행 |
| 제작 방식   | HTML, CSS, JavaScript                                  |
| 데이터 관리 | LocalStorage 기반 상태 저장                            |
| 배포        | GitHub Pages                                           |

---

## 핵심 기능

| 기능           | 설명                                    |
| -------------- | --------------------------------------- |
| 온보딩         | 사용자의 여행 취향 선택                 |
| 여행 조건 입력 | 목적지 분위기, 기간, 인원 입력          |
| AI 추천 결과   | 취향 기반 추천 여행 카드 제공           |
| 여행 상세      | 여행지 소개, 추천 이유, 기간, 예산 확인 |
| 일정 보기      | Day별 세부 여행 일정 확인               |
| 저장 기능      | 관심 여행 저장 및 마이페이지 확인       |
| 로그인 흐름    | 로그인/회원가입 화면 구성               |

---

## 서비스 흐름

```mermaid
flowchart LR
    A[시작 화면] --> B[로그인 / 게스트 진입]
    B --> C[여행 취향 선택]
    C --> D[여행 조건 입력]
    D --> E[AI 추천 여행지]
    E --> F[여행 상세]
    F --> G[Day별 일정 확인]
    G --> H[여행 저장]
    H --> I[마이페이지]
```

---

## 화면 구조

```mermaid
flowchart TD
    A[index.html<br/>시작 화면]

    A --> B[signin.html<br/>로그인]
    A --> C[signup.html<br/>회원가입]
    A --> D[home.html<br/>홈]

    C --> E[onboarding-preference.html<br/>취향 선택]
    E --> F[trip-setup.html<br/>여행 조건 입력]

    D --> G[recommend.html<br/>추천 여행]
    F --> G

    G --> H[detail.html<br/>여행 상세]
    H --> I[itinerary.html<br/>상세 일정]

    I --> J[my.html<br/>마이페이지]
    H --> J
```

---

## 사용자 여정

```mermaid
journey
    title AI 여행 추천 서비스 사용자 여정
    section 진입
      서비스 접속: 5: 사용자
      로그인 또는 게스트 선택: 4: 사용자
    section 취향 입력
      여행 스타일 선택: 5: 사용자
      기간과 인원 입력: 4: 사용자
    section 추천 탐색
      AI 추천 여행 확인: 5: 사용자
      여행 상세 보기: 5: 사용자
    section 일정 확인
      Day별 일정 탐색: 4: 사용자
      관심 여행 저장: 4: 사용자
    section 관리
      저장한 여행 확인: 4: 사용자
```

---

## 정보 구조도 (Information Architecture)

```mermaid
flowchart TD
    A[RoamAI<br/>AI 여행 추천 서비스]

    A --> B[Start]
    B --> B1[서비스 소개]
    B --> B2[로그인]
    B --> B3[회원가입]
    B --> B4[게스트 시작]

    A --> C[Onboarding]
    C --> C1[여행 취향 선택]
    C --> C2[여행 조건 입력]

    A --> D[Recommendation]
    D --> D1[AI 추천 여행지]
    D --> D2[추천 카드]
    D --> D3[추천 이유]
    D --> D4[예상 기간 / 예산]

    A --> E[Travel Detail]
    E --> E1[여행지 소개]
    E --> E2[상세 정보]
    E --> E3[일정 보기]
    E --> E4[저장하기]

    A --> F[Itinerary]
    F --> F1[Day별 일정]
    F --> F2[장소 정보]
    F --> F3[이동 흐름]

    A --> G[My Page]
    G --> G1[사용자 정보]
    G --> G2[저장한 여행]
    G --> G3[로그아웃]
```

---

## 추천 데이터 예시

| 여행지          | 콘셉트          | 기간 | 특징                             |
| --------------- | --------------- | ---: | -------------------------------- |
| 일본 도쿄       | 도시와 전통     |  7일 | 도시 탐험과 역사·문화 경험       |
| 인도네시아 우붓 | 힐링과 웰니스   |  5일 | 자연, 스파, 명상 중심 일정       |
| 스위스 알프스   | 자연과 액티비티 |  7일 | 하이킹, 전망열차, 절경 중심 일정 |

---

## 기술 스택

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-구조-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-스타일-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-인터랙션-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Tools

![Git](https://img.shields.io/badge/Git-버전관리-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-저장소-181717?style=flat-square&logo=github&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-배포-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## 주요 구현 포인트

| 구분      | 구현 내용                                   |
| --------- | ------------------------------------------- |
| 화면 구성 | HTML 페이지 단위로 서비스 흐름 구성         |
| 스타일링  | CSS 기반 반응형 UI 디자인                   |
| 인터랙션  | JavaScript로 버튼, 필터, 저장 기능 처리     |
| 상태 관리 | LocalStorage로 사용자 정보와 저장 여행 관리 |
| 추천 카드 | 여행 데이터 배열 기반 카드 렌더링           |
| 일정 화면 | 선택한 여행지의 Day별 일정 표시             |

---

## 상태 관리 구조

```mermaid
flowchart TD
    A[사용자 입력] --> B[JavaScript 처리]
    B --> C[LocalStorage 저장]
    C --> D[추천 화면 반영]
    C --> E[상세 페이지 반영]
    C --> F[마이페이지 반영]

    D --> G[추천 여행 카드]
    E --> H[여행 상세 정보]
    F --> I[저장한 여행 목록]
```

---

## 폴더 구조

```text
ai-travel-service
├── assets
│   ├── icons
│   └── images
├── css
│   └── style.css
├── js
│   └── script.js
├── index.html
├── home.html
├── signin.html
├── signup.html
├── onboarding-preference.html
├── trip-setup.html
├── recommend.html
├── detail.html
├── itinerary.html
├── my.html
└── README.md
```

---

## 페이지별 역할

| 페이지                       | 역할                        |
| ---------------------------- | --------------------------- |
| `index.html`                 | 서비스 진입 화면            |
| `home.html`                  | 여행 검색 및 추천 시작 화면 |
| `signin.html`                | 로그인 화면                 |
| `signup.html`                | 회원가입 화면               |
| `onboarding-preference.html` | 여행 취향 선택 화면         |
| `trip-setup.html`            | 여행 조건 입력 화면         |
| `recommend.html`             | AI 추천 여행 리스트 화면    |
| `detail.html`                | 추천 여행 상세 화면         |
| `itinerary.html`             | Day별 여행 일정 화면        |
| `my.html`                    | 저장한 여행 확인 화면       |

---

## 작업 과정

```mermaid
gantt
    title 프로젝트 작업 흐름
    dateFormat  YYYY-MM-DD
    section 기획
    서비스 구조 정리           :done, a1, 2026-04-23, 1d
    화면 흐름 설계             :done, a2, 2026-04-23, 1d
    section 구현
    HTML 화면 제작             :done, b1, 2026-04-24, 3d
    CSS 스타일링               :done, b2, 2026-04-25, 3d
    JavaScript 기능 구현        :done, b3, 2026-04-27, 2d
    section 마무리
    화면 연결 및 테스트         :done, c1, 2026-04-29, 1d
    GitHub Pages 배포          :done, c2, 2026-04-29, 1d
```

---

## 프로젝트에서 신경 쓴 부분

| 관점        | 내용                                                    |
| ----------- | ------------------------------------------------------- |
| UX          | 사용자가 추천을 받기까지의 흐름을 단순하게 구성         |
| UI          | 카드, 버튼, 배지, 여행 이미지 중심의 시각적 구성        |
| Web         | 여러 HTML 페이지를 연결한 서비스형 화면 구성            |
| Interaction | 추천 필터, 일정 선택, 저장 기능 등 기본 동작 구현       |
| Portfolio   | 기획 → 화면 → 구현 → 배포 흐름을 보여주는 프로젝트 구성 |

---

## 개선 예정

```mermaid
flowchart LR
    A[현재 버전] --> B[반응형 완성도 개선]
    B --> C[추천 조건 세분화]
    C --> D[실제 AI API 연동]
    D --> E[회원별 데이터 저장]
    E --> F[서비스 고도화]
```

| 개선 항목   | 방향                                        |
| ----------- | ------------------------------------------- |
| 추천 기능   | 실제 AI API 또는 추천 로직 연동             |
| 데이터 관리 | LocalStorage에서 서버/DB 기반으로 확장      |
| UI 개선     | 모바일 화면 최적화 및 인터랙션 강화         |
| 접근성      | 버튼, 링크, 대체 텍스트, 키보드 접근성 보완 |
| 포트폴리오  | 화면 캡처, 기획 문서, 디자인 시스템 추가    |

---

## 프로젝트 의의

이 프로젝트는 단순한 정적 웹페이지가 아니라,  
**사용자 입력 → 추천 결과 → 상세 일정 → 저장한 여행 관리**로 이어지는  
서비스형 웹 UI 흐름을 구현한 프로젝트입니다.

특히 UI/UX 관점에서는 사용자가 여행 추천을 받는 과정을 단계적으로 설계하고,  
웹디자인 관점에서는 여행 서비스에 어울리는 카드형 UI와 시각적 흐름을 구성하는 데 집중했습니다.

---

## 제작자

| 구분   | 내용                                                     |
| ------ | -------------------------------------------------------- |
| 이름   | joona0306                                                |
| 역할   | UI/UX 설계, 웹디자인, 퍼블리싱, JavaScript 인터랙션 구현 |
| GitHub | https://github.com/joona0306                             |
