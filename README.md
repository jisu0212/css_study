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
## box css
### display
* `block, inline, inline-block`
* 특정 태그가 화면에 어떻게 표시될지 지정하는 속성
* `block` : 새로운 행, 크기, 여백 인식
* `inline` : 내용만큼 크기 인식(그 외 크기 인식 불가능)
* `inline-block` : 내용만큼 크기 인식(크기 추가설정 가능), 옆으로 정렬
### box-sizing
* `box-sizing:boder-box`
* 요소의 너비와 높이를 계산할 때 테두리, 여백(padding)까지 포함해서 계산하는 속성
* 속성 미적용 시 : w100+h100+padding-top20 = 100x120
* 속성 적용 시 : w100+h100+padding-top20 = 100x100
### width, height
* 요소의 너비와 높이
* 절대값px, 상대값%, 화면 상대값 vw, vh
* 상대값 처리는 0~100% 사이 값만 사용한다.
## table
### tr 행, td 내용 열
* 열(td)은 항상 행(tr) 안에 존재해야 한다.
* table은 행, 열을 자식, 자손으로 가지는 부모로써 존재한다.
### th 제목 열
* 제목, 내용 순서로 배치하기 위해 제목(th)이 먼저 시작하고 내용(td)이 순서로 배치된다.
* th, td는 형제 관계
* th, td는 tr(행) 안에서만 존재 가능하다.
### thead, tbody, tfoot 행 그룹
* 행그룹은 행(tr)의 부모로 사용한다.
* 각각 제목행그룹, 내용행그룹, 결과행그룹
## padding(안쪽 여백), margin(바깥쪽 여백)
* 시계방향 순서로 값을 입력한다. 위->오른쪽->아래->왼쪽
* **margin 겹침오류** : 마진이 두 가지 적용되면 먼저 적용된 것을 인식한다. 그렇기 때문에 겹치는 마진 중 나중에 적용한 마진 값을 0으로 해주고 먼저 적용한 마진 값의 크기를 늘린다.
## 수열선택자 nth
* nth-child(n) : 자식 기준
* nth-of-type(n) : 요소 기준
* ex) div>p:nth-child(1) ⇒ div의 1번째 자식 P를 선택해라
* ex) div>p:nth-child(4)>a ⇒ div의 4번째 자식 P의 자식 a를 선택해라
## table 열 수평/수직 방향 합치기
* th, td에 사용하는 속성
* colspan : 같은 가로 행(tr)에 배치된 2개 이상의 열(th,td)을 합칠 때 사용한다. 값은 합쳐지는 총 열의 개수를 입력한다.
* rowspan  : 서로 다른 가로 행(tr)에 배치된 2개 이상의 열(th,td)을 합칠 때 사용한다. 값은 합쳐지는 총 열의 개수를 입력한다.
## Form 요소와 속성
### `<form action="#" method=""></form>`
* 사용자로부터 입력 받을 수 있는 폼을 정의하는 요소
* action:폼 데이터를 제출할 서버 스크립트 지정
* method:폼 데이터를 제출하는 방법 (post와 get이 있다)
* **POST** : 폼 데이터를 HTTP 본문에 포함하여 서버로 전송한다.(보안 높음)
* **GET** : 폼 데이터를 URL에 추가하여 서버로 전송한다.(보안 낮음)
### fieldset
* 양식의 일부를 그룹화하는 태그. legend 그룹제목 포함
* 폼의 양식을 더 읽기 쉽고 이해하기 편하게 구성하는 데 주 목적이 있다.
### `<input type="" name="">`
* 속성은 입력양식/선택&목록 컨트롤 양식 종류에 따라 의미가 달라진다.
* type : input 요소가 나타낼 입력 필드의 종류를 정한다.
* name : input 요소의 이름을 지정한다.(데이터 구분)
* readonly : 읽기전용 설정
* autofocus, autocomplete : 페이지 로딩 시 해당 컨트롤 자동 포커스 설정, 검색어 자동 완성 기능 (ex:사이트를 열자마자 입력창 커서가 깜빡거리는 것)
* value : input요소의 초기값을 지정한다.
* placeholder : 입력창 안에 미리 제시된 텍스트 (활성화 시 제거됨)
* value와 placeholder의 차이점 : value와 placeholder는 모두 입력창 내 미리 제시된 텍스트라는 공통점이 있지만 value는 입력창 활성화 시 제거되지 않는 초기값이고, placeholder는 입력창 활성화 시 제거된다.
* maxlength : 입력창 내 최대 글자 수 지정
### `<textarea></textarea>`
* rows, cols : 수직, 수평으로 글자를 얼만큼 보이고 싶은지 조절
    ex)`rows="5" cols="100"` -> 수직으로 5줄, 수평으로 100자까지 보이도록 창을 조절
* 사용용도 및 주의사항 : css에서 창 크기를 조절하는 것을 권장
### input의 입력양식과 선택양식
* text, url 등의 사용자가 직접 입력 가능한 입력양식
* radio 등의 사용자의 입력이 아닌 선택으로 들어가는 선택양식
* `name` : 입력양식(데이터구분용), 선택양식(데이터구분(개별데이터X, 그룹데이터구분용))
* `value` : 입력양식(초기값), 선택양식(개별데이터구분용)
## Float
* 블록요소의 흐름을 변경하기 위해 사용하는 레이아웃 배치 CSS 속성
* 웹 페이지에서 좌/우로 배치되는 레이아웃을 제작 시 사용
### 부유개념 float 이해하기
* 부모의 크기는 자식이 있어야 유지되는데 자식이 float를 가지면 부모에게서 부유(뜨다)하게 되어 부모가 자식 크기를 인지하지 못하게 된다.
### 부유 해결방법
1. **높이 설정하기 `부모 {height:px}`** : 부모 대상에 강제 높이를 설정해서 자식의 크기에 영향을 받지 않도록 한다. (권장하지 않음)
2. **가상클래스선택자 생성하기 `부모:after {content''; display:block; clear:both;}`** : 부모의 자식 요소를 가상으로 생성하여 가상자식요소만큼 크기를 인식하도록 한다. 
3. **영역 인식 `부모 {overflow:hidden;}`** : float로 인해 부유한 자식요소들을 잡아들여 영역을 다시 인식하도록 한다.
## CSS Layout
### float, flex
* `float` : 형제 관계에 해당하는 block or inline tag 왼쪽, 오른쪽 정렬할 때 사용
* 예 : ul-li *3개 정렬 `ul li {float:left}`
* `flex` : 정렬하고자 하는 아이템의 부모한테 flex를 먼저 설정한다.
* 예 : ul-li *3개 정렬 `ul {display:flex;}`
* flex 설정 시 기본값 : 메인축(수평) 교차축(수직)
* `display:flex` : 정렬대상의 부모 설정 속성값, 설정 시 해당 부모 기준 자식까지(자손X) flexible box layout으로 처리하겠다!
### flex-direction (container에 적용하는 속성)
* container 안의 item의 메인축 방향 설정한다.
* `flex-direction:row`: 왼쪽 -> 오른쪽 수평축 (기본값)
* `flex-direction:row-reverse` : 오른쪽 -> 왼쪽
* `flex-direction:column` : 위 -> 아래 수직축 변경
* `flex-direction:column-reverse` : 아래 ->위
### flex-wrap (container에 적용하는 속성)
* container 내부 items 줄바꿈 처리를 설정한다.
`flex-wrap:wrap` : 자동 줄바꿈 (기본값)
`flex-wrap:wrap-reverse` : 행 기준 역방향으로 자동 줄바꿈 처리
`flex-wrap:nowrap` : 줄바꿈하지 않음(한 줄 처리) 가변너비에 따라 자동으로 % 크기 변경
### flex-flow (container에 적용하는 속성)
* flex-direction과 flex-wrap을 묶음으로 처리할 수 있다.
* `flex-direction:column + flex-wrap:nowrap`일 경우 `flex-flow:column nowrap` 으로 작성
### justify-content (container에 적용하는 속성)
* 메인축의 정렬방법을 설정한다.
* `justify-content:flex-start` : items의 시작점 container의 시작점으로 정렬
* `justify-content:flex-end` : items의 시작점 container의 끝점으로 정렬
* `justify-content:center` : items를 메인축 기준 container에서 가운데 정렬
* `justify-content:space-between` : items를 container의 start, end 양끝 items를 배치하고 나머지는 고르게 정렬
* `justify-content:space-around` : items를 container 안에서 균등한 여백을 포함하여 정렬
### align-content (container에 적용하는 속성)
* 교차축의 아이템이 2줄 이상일 경우 정렬방법
* `align-content:stretch` : 기본값(교차축 기준으로 아이템 늘리기)
* `align-content:flex-start` : 	container의 start지점 기준 item 정렬
* `align-content:flex-end` : container의 end 지점 기준 item 정렬
* `align-content:center` : container의 가운데 위치 기준 item 정렬
* `align-content:space-between` : container의 start, end 에 양쪽 끝 맞추고 나머지 item 균등하게 정렬
* `align-content:space-around` : container에서 모든 item 균등하게 정렬
### align-items (container에 적용하는 속성)
* 교차축의 아이템이 1줄일 경우 정렬방법
* `align-items:stretch` : (기본값) 교차축 방향 시작지점에 맞춰서 정렬(start와 거의 차이 없음)
* `align-items:flex-start` : 교차축 기준 container의 시작지점에 맞춰서 정렬(왼쪽 / 위)
* `align-items:flex-end` : 교차축 기준 container의 종료지점에 맞춰서 정렬(오른쪽/아래)
* `align-items:center` : 교차축 기준 container의 가운데지점에 맞춰서 정렬(수직중앙, 수평중앙)
* `align-items:baseline` : 교차축 기준 container의 시작지점에 맞춰서 정렬(왼쪽 / 위)
### align-self (item에 적용하는 속성)
* container에 적용하는 align-items보다 우선순위가 높고 flex box의 교차축을 정렬한다.
* `align-self:flex-start` : 교차축 기준 container의 start 시작 위치(top or left)
* `align-self:flex-end` : 교차축 기준 container의 end 종료 위치(bottom or right)
* `align-self:center` : 교차축 기준 container의 center 중심 위치(center, middle)
* `align-self:baseline` : 교차축 기준 container의 baseline 위치(내용 크기에 따라 다름(기본은 start동일))
### order (item에 적용하는 속성)
* 아이템의 정렬 순서 설정
* 숫자가 작은 순서가 첫번째로 배치된다.
* `order:-1`, `order:0`, `order:1` 이렇게 셋이 있다면 -1, 0, 1을 가진 item 순으로 배치된다.
### flex-grow
*  container 너비에서 각 아이템의 증가 비율을 뜻한다.
* 증가 비율이 클 수록 크게 표시된다.
* 디바이스 너비를 item보다 크거나 같을 경우 적용된다.(커질 수록 차이가 나타남)
* 디바이스 너비를 item보다 작게 설정하면 flex-grow 관계없이 일정 비율로 조정된다.
### flex-shrink
* container 너비에서 각 아이템의 감소 비율을 뜻한다.
* 감소 비율이 클 수록 작게 표시된다.
* 디바이스 너비를 item보다 작거나  같을 경우 적용된다.(작아질 수록 차이가 나타남)
* 디바이스 너비를 item보다 크게 설정하면 flex-shrink 관계없이 일정 비율로 조정된다.
### flex-basis
* container 너비에서 각 아이템의 기본 크기를 뜻한다. (기본값 auto)
* 요소에 width값이 적용되어 있는 경우 flex-basis를 설정하면 width값과 동일한 값으로 인식한다.
* basis 너비보다 디바이스가 작아지변 가변형으로 변경된다.
* auto는 내용 크기만큼 자동 인식된다.
### flex
* item에 적용하는 속성으로 증가(grow)/감소(shrink)/기본(basis)의 묶음 속성
* 주의사항) basis값은 설정 안할 시 기본값 auto가 아닌 숫자 0 으로 인식한다.