/*
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const btn = document.querySelector('button')
btn.addEventListener('click', function(){
    let total = (Number(height.value) - 100)*0.9;
    let over_weight = Number(weight.value) - total;
    goals.value = (`적정체중은 ${total}kg이며 ${over_weight}kg 초과되셨습니다.`)
})