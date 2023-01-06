//JS에서는 함수 작성 방식이 여러 개, 함수 작성 시에는 function 키워드 사용

//기본적인 함수 정의, 함수 선언문 방식
function add(a,b) {
    return a+b;
}

//함수 호출
console.log(add(2,3));

//함수 역시 객체 타입의 값이기 때문에 생성한 변수에 할당할 수 있음

//두 번째 함수 작성 방식 - 함수 표현식 방식(함수를 하나의 값으로써 변수에 할당)
const mtp = function(a,b) {
    return a+b;
}


console.log(mtp); //mtp변수에 들어있는 값이 무엇인지 출력 -> 함수가 값을 들어있음
console.log(mtp(2,3));


//ES6 문법 중 화살표 함수(arrow function), function 키워드를 사용하지 않고, 화살표(arrow)를 사용하여 좀더 간략하게 표현
//(a, b):파라미터 작성부분
// =>: 화살표 기호
//a - b : return 부분
const sub = (a,b) => a - b;

console.log(sub);
console.log(sub(10,15)); //sub라는 변수명으로 하