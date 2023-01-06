/**
 * 
 * 
 * 
 * Arrow function
 * 2015(ES2015, ES6)에 발표된 ECMAScript specification(ES6)는 arrow function 추가
 * 파이썬의 lambda function과 비슷
 * 
 * this 바인딩이 필요없고, 함수의 표현과 동작이 전반적으로 간략적인 형태
 * 
 * 
 */

//화살표 함수의 특징
//1. 암묵적인 return

//기존 함수는 함수 몸체(body)에 사용하고, return 키워드를 썼지마느 화살표 함수는 둘 다 쓰지 않음

const sum = (a,b) => a + b; //return 키워드가 빠져있음
//return키워드를 생략할 수 있는 경우는 함수 몸체의 구현부가 한 줄일 때만 가능

//body 부분이 2줄 이상일 경우 {} 및 return 키워드를 추가해야함
const sub = (a,b) =>{
    console.log('뺄셈입니다.');
    return a-b;
}

console.log(sub(5,3));


//객체를 리턴하는 경우, 객체 리터럴 그 자체를 변환할 때는 ()를 작성해야함

//{} 의미 두가지
//1. 함수의 body부분을 구분해주는 block
//2. 객체 작성 시 사용하는 {} 기호
const div = (a,b) => ({ age:2 });



console.log(div());

//파라미터가 1개일 경우 () 생략 가능
const square = x => x * x;
console.log(square(10));


//파라미터가 하나도 없는 경우 ()작성이 필수
const greet = () => 'Hello!';
console.log(greet());

//return과 {}를 추가해서 byebye 출력하는 함수

const bye = () =>{
    return "byebye";
}

console.log(bye());