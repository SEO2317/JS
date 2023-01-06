/**
 * 
 * JS에서 원시 값(Primitive value)을 제외한 모든 것은 객체
 * 
 * 기본적인 차이는 원시값은 하나의 값만을 나타내지만,
 * 객체는 다양한 타입의 값을 하나의 단위로 구성한 복잡 자료 구조
 * 
 * 
 * In Java
 * class Mouse{
 *  int age
 *  String name = "Yoo";
 * }
 * 
 * age라는 기본 타입의 정수형 변수, name이라는 문자열의 타입의 묶어서(Mouse) 관리
 * 
 * 원시값은 변경 불가한 값(immutable value),
 * 객체는 변경 가능한 값(mutable value)
 * 
 * 객체는 프로퍼티(property, 속성)로 구성된 집합, 그 프로퍼티는 키(key)와 값(value) 구성됨
 * 
 * JS에서 사용할 수 있는 모든값(ex,number,string,boolean,object 등등)들은 프로퍼티의 value(값)가 될 수 없음
 * 
 * 함수는 일급객체(first citizen, 일급 시민)이기 때문에 '값이 될수 없고', 따라서 객체의 프로퍼티가 될수 있음
* 
 * 
 * 
 */
const dog = {}; //비어있는 객채

const cat = {
    //property 나열
    name: 'toto', //name property에 문자열 값 'toto' 할당
    fruit: 'kiwi',
    sing: function(){console.log("야옹~");},
    say:function(){console.log(`야옹! ${this.fruit}가 먹고 싶어`);},
    //, 중요
};

console.log(dog); 


console.table(cat);
console.log(cat); //cat은 00 타입.

console.log(cat.name);


console.log(`${cat} + 은 + typeof cat타입이다`);

//프로퍼티를 동적으로 추가(존재하지 않는 프로퍼티에 값을 할당하면 추가됨)
cat.age  = 2;
console.log(cat.age);

// cat = {}; //object.js:52 Uncaught TypeError: Assignment to constant variable 재할당이 안된다.


//프로퍼티 삭제

delete cat.age;
console.log(cat);


console.log(typeof cat.sing); //function 시그니처 자체를 출력
cat.sing(); //실제 함수 호출은 프로퍼티명 뒤에 () 작성

//cat 객체에 프로퍼티로 say를 작성, 그 값은 함수, 출력문은 야옹! kiwi가 먹고 싶어

cat.say();