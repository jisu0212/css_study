# CSS(Cascading Style Sheet)
## CSS 작성 전 준비사항
* html 문서 준비(태그 작성 완료 상태)
* html, css 파일 별도 폴더 관리
* 최상위 폴더 html 파일 배치
* 하위 폴더명 css, styles 으로 css파일 배치
* ex) index.html, index.css
## CSS 외부스타일시트와 내부스타일시트
* name.css 외부파일로 분리해서 html에 link로 연결하는 **외부 스타일시트**
* html파일 내에서 head태그 안에 style태그로 구분해서 작성하는 **내부 스타일시트**
* 외부스타일시트 장단점:
- 장점 : 1개의 css파일로 여러개의 html을 관리할 수 있다.
- 단점 : 파일명 또는 파일 위치를 정확히 관리하지 않으면 파일 관리가 어려울 수 있다.
* 내부스타일시트 장단점:
- 장점 : html파일 내에 작성하여 태그와 한꺼번에 보기 편하다.
- 단점 : 2개 이상의 html파일을 동시에 디자인관리 하는 것이 불가능하다.
## CSS 선택자
1. 태그선택자 : `<h1></h1>` -> `h1 {속성:값;}`
2. 클래스선택자 : `<h1 class="a"></h1>` -> `.a {속성:값;}`
3. 아이디선택자 : `<h1 id="b"></h1>` -> `#b {속성:값;}`
4. 자손선택자 : `<h1><em><span></span></em></h1>` -> `h1 em span {속성:값;}`
5. 자식선택자 : `<h1><em><em></em></em></h1>` -> `h1 > em {속성:값;}`
## CSS 디자인하기
* CSS 작성 전 HTML이 미리 디자인이 되어있으면 안된다.
* **HTML을 디자인 초기화하는 작업이 CSS 디자인 전 반드시 선행되어야 한다!!**
* 초기화 CSS `reset.css` 공통파일(날짜나 프로젝트명 표기금지!)
# CSS 글자 표현 속성
## font-family
* 로컬글꼴(설치글꼴제공) 또는 웹 글꼴(인터넷만 되면 볼 수 있기때문에 추천!)을 연결할 수 있다.
* "메인대표글꼴", "후보글꼴" (후보제한없음)
* 후보글꼴은 메인글꼴과 모양이 비슷한 글꼴로 연결해야 한다.
* 서체 이름에 공백이 있거나 한글이면 무조건 “”따옴표 안에 서체 이름을 써야한다. (jua같은 서체는 그냥 jua로 써도 된다.)
## font-size
* 웹 글꼴 평균 16px
* 사용 단위 px, %, em, rem
* 절대값 : px, 상대값 : %, em, rem(권장)
* em은 가장 가까운 부모를 기준으로 상대적으로 값이 달라짐
* 그래서 body를 기준으로 하는 rem을 사용함. ex)1.0rem=16px, 1.25rem=20px
# 선택자 우선 순위
* #아이디(3) > .클래스(2) > 태그(1)
1. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#box .a .b p {}` > 3+2+2+1 = 8
* `#box #a .b p {}` > 3+3+2+1 = 9
* `#wrap #box .a {}` > 3+3+2 = 8
* `#wrap .a .b p {}` > 3+2+2+1 = 8
2. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#box #wrap .a .b` > 3+3+2+2 = 10
* `#box .a .b .c` > 3+2+2+2 = 9
* `#wrap .a .b p` > 3+2+2+1 = 8
* `#wrap .a p p p p` 3+2+1+1+1+1 = 9
## color
* 영문명 직접 입력 ex) 테스트용으로 주로 밝은색을 사용한다.
* aqua, lime, yellow, coral, ...
* 헥사코드 입력 최소값0 ~ 최대값F RGB 코드 기준
* RGB 웹 색상 기준으로 색상을 섞을 수록 밝아진다.
* #Hex #000000 == #000, #FF00CC => #F0C
* rgba(red, green, blue, alpha) *최대색상 255
