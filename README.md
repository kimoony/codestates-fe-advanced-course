# 코드스테이츠 Front-End 심화과정 사전 과제

### 사전 과제 일지
[블로그](https://yakjeon.tistory.com/category/CodeStates/%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C%EC%9D%BC%EC%A7%80)

### 완성 GIF
![사전과제](https://blog.kakaocdn.net/dn/bbInUK/btrITqg0Lgm/tMig1pc26h4Z6HInwLeAV1/img.gif)

### [페이지 바로가기](https://kimoony.github.io/codestates-fe-advanced-course/)

<br />

### Wireframe
![와이어프레임](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw6uPI%2FbtrI0fy7KGS%2FYYco356veoJjMRgPMuETu0%2Fimg.png)

<br />

### 프로젝트 실행 방법
개발환경
> node v17.3.1  
npm 8.3.0

- 본 저장소를 클론 받은 후 루트 디렉터리에서 `npm install`, `npm satrt` 을 해서 구동한다.

- 배포
  - GitHub
    - `packge.json` scripts 수정
    ```js
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
    },
    homepage: "https://kimoony.github.io/react-to-do/"
    ```
    - gh-pages 설치
    ```zsh
    $ npm install gh-pages --save-dev
    ```
    - `.env` 파일에 GitHub token 입력  
    [참고 블로그](https://yakjeon.tistory.com/99)
    - GitHub Repository 에 `gh-pages` branch 생성
    - 루트 디렉토리에서 `npm run deploy` 실행 

<br />

### 사용한 스택 목록
- HTML5
- JavaScript
- React
- styled-components
- Recoil
- Axios
- gh-pages

<br />

### 구현 기능 및 방법

- 페이지네이션 기능
  - 구현 방법:
    - 총 데이터를 `postPerPage` 만큼 등분해서 보여준다.
    - 100개의 데이터를 10 등분해야한다.
    - 1-10, 11-20 ... 이렇게 나누어 보여주기 위해 `indexOfLast`, `indexOfFirst` 변수를 선언한다.
    - 처음과 마지막 인텍스 번호를 구하고 `currentPosts` 함수를 통해 100개의 배열 데이터를 `slice` 함수로 분할하고 새로운 배열로 리턴한다.
    - `postPerPage` - 페이지당 포스트 수, `totalPosts` - 전체 포스트 수, `currentPage`, `setCurrentPage` 등을 Pagination.js에 props로 전달한다.
    - `Pages`라는 변수를 선언하고 빈 배열을 할당한다.
    - i 가 `Math.ceil(totalPosts / postPerPage)`보다 커지면 반복문이 종료되게 해서 `Pages`에 i를 push 한다.
    - `Pages`를 map() 함수를 이용해 순회하며 페이지 번호를 생성한다. 
  - 어려웠던 점:
    - 페이지를 선택하고 그 해당 페이지 번호가 선택되어 있다는 스타일 적용이 어려웠다.
    - 해결 방법:
        - 번호가 있는 <PageBtn> 태그에 `aria-current`라는 속성을 넣어 주었다.
        ```js 
        aria-current={currentPage === num ? "currentPage" : null} 
        ``` 
        - 그리고 style을 적용시켜 선택한 페이지를 가리키도록 하였다.
- 댓글 보이기/숨기기 기능(토글)
  - 구현 방법:  
    - PostDetail.js 에서 `showComments`를 state로 관리하고 `true`일 때 댓글이 가려지고,
    - `false`일 때 댓글이 보이도록 구현했다.

<br /> 

### 추가 구현 기능 및 방법
- 다크모드
  - "Dark" 버튼을 누르면 배경과 글씨가 어둡게 변경되고, "Light"를 누르면 밝게 변경된다.
  - 구현 방법:
    - 먼저 `recoil` 를 설치하고, src 폴더 안에 `atoms.js` 파일을 생성한다.
    - `atoms.js` 파일에 light모드, dark모드에 대한 state 기본값을 입력해주고 현재 모드에 대한 state를 설정한다.
    - `Home`과 `PostDetail`에 페이지 각각 버튼이 들어가야한다.
    - App.js
      - 버튼을 눌렀을 때 마다 변경될 text에 대한 state를 만든다.
      - `atoms.js`에서 설정한 state 값들을 불러오는데 `themeState`를 어떤 모드인지 변경이 되기 때문에 `useRecoilState로` state를 가져오고
      - dark, light 모드에 설정한 색상은 값만 가져오면 되기 때문에 `useRecoilValue`로 state를 가져온다.
      - Dark 버튼을 눌렀을 때 theme과 text가 변경 되도록 toggle 함수를 만든다.
      - 현재 theme에 대한 state 값을 `current`라는 변수에 저장하고
      - 각 적용되는 색상을 변수로 저장해준다.
      - `Home`과 `PostDetail`에 필요한 state와 toggle 함수, 색상을 저장하고 있는 변수를 props로 전달한다.
    - Home.js PostDetail.js
      - 버튼을 구성하고 있는 <NavTheme /> 컴포넌트를 넣어주고 text가 변하는 state와 toggle함수를 props로 전달한다.
      - background-color, border-color, text 등 색상을 담은 변수를 필요한 태그에 props 형식으로 전달해 모드에 맞는 색상이 나오도록 해준다.
      - `Post.js`, `PostItem.js`, `PostComment.js` 에도 색상을 담은 변수를 props로 전달하고 색상이 적용되는 태그에 props 형식으로 전달해 모드에 맞는 색상이 나오도록 해준다.
  - 구현 후기: 
    - `Recoil`을 학습하고 있어서 Recoil을 사용했는데 색상을 적용할 때 props로 전달을 하다보니 코드가 조금 지저분해 보인다.
    - props로 전달하는 것보다 조금 더 깔금한 방법이 있는지 찾아봐야겠다.

<br /> 
  
# 작성자

👨‍💻 **김 훈**
- GitHub: [@kimoony](https://github.com/kimoony)
- Blog: [MyBlog](yakjeon.tistory.com)

