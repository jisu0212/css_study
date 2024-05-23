//item_wrap 안 자식 item의 개수를 .top의 total_num 출력
//item_wrap 안 자식 item의 개수 <= 콘솔 출력
const item_wrap = document.querySelector('.item_wrap')
console.log(item_wrap.childElementCount);
console.log(item_wrap.children.length);
//item의 개수를 top의 total_num 출력
//item의 개수: item_wrap.childElementCount
//item의 개수: item_wrap.children.length
//total_num 출력하고싶다면? total_num 변수 생성
const total_num = document.querySelector('.total_num')
//DOM 값을 읽거나 변경하는 속성 = innerHTML, innerText
total_num.innerText = item_wrap.children.length;