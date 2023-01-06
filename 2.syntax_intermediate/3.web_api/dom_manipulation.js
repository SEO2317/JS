//DOM 객체
console.log(document); //HTML 문서에 대한 기본 정보만 출력


console.dir(document); //조금 더 자세한 프로미터 조호;(direector)

console.log(window.document); //window 객체 내부에 document가 하나의 프로퍼티로


console.log(window.document === document);

//DOM을 통한 HTML element 조직
const h1 = document.getElementById('main-title'); //get(가져와) Element (HTML tag를) 
//가져온 값을 h1이라는 이름의 변수에 할당

console.log(typeof h1); //object
console.dir(h1);

console.log(h1.innerText);

const li = document.getElementsByClassName('list-item');
console.log(typeof li);
console.log(Array.isArray(li)); //해당 객체기 array인지 확인, false
console.log(li[0]);

const li2 = document.querySelectorAll('.list-item');  //유사배열
console.log(Array.isArray(li2));    
console.log(li2[0]);

const fruits = ['apple','banana','kiwi']
console.log(Array.isArray(fruits)); //true



//CSS Selector를 통한 조회, 선택자 기호 필스
console.log(document.querySelector('#main-title'));