//2.이벤트 핸들러 프로퍼티 방식 - HTML JS를 분리
const evPropButton = document.getElementById('btn-ev-prop');
console.dir(evPropButton);

const cat = {
    age:2,
    sing:() => console.log('야옹')
}

evPropButton.onclick = function() {console.log('by event property');};

console.dir(evPropButton);
console.dir(evPropButton.onclick);

cat.age = 5;
console.log(cat.age);

evPropButton.onclick = function() {console.log('다른 함수 할당');};


//3.addEventListener 방식 -> 이벤트 핸들러 프로퍼티에 영향을 미치지 않기 때문에 등록한 모든 이벤트가 호출됨
// on 접두사 생략
const addEvLsnrButton = document.getElementById('btn-add-ev-lsnr');
// console.log(addEvLsnrButton);

function buttonHandler(){
    console.log('double clicked');
}

//addEvLsnrButton.addEventListener('등록할 이벤트이름', 이벤트 발생시 동작할 함수())
addEvLsnrButton.addEventListener('dblclick',buttonHandler);


//화살표 함수로 클릭 이벤트 추가, 화살표 함수는 콜백함수 파라미터 부분에 직접 작성
addEvLsnrButton.addEventListener('click',()=>{console.log('button clicked');});

//이벤트 핸들러의 제거
//2. 이벤트 핸들러 프로퍼티 방식
evPropButton.onclick=null;

//3.addEventListener 방식
// addEvLsnrButton.removeEventListener("제거할 이벤트명",이벤트에 사용된 함수명);
addEvLsnrButton.removeEventListener('dblclick',buttonHandler);
// addEvLsnrButton.removeEventListener('click',()=>{});
// 익명함수는 참조할 수가 없어서 제거 불가
