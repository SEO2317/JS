/**
 * spread syntax 기호 '...'
 * 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(전개,분산) 개별적인 값들의 목적으로 바꿈
 * 
 * spread 문법 사용 가능 대상은 Array,String,Map,Set,DOM Collection 등으로 한정됨
 */

//1. spread with Arrays
const fruits = ['apple','banana'];
const otherFruits = ['kiwi', 'podo'];

//기존의 배열 연결(concatenation) 방식
const allFruits = fruits.concat(otherFruits);
console.log(allFruits);

//spread(요소들로 풀어 헤친다.)
const myFruits = [...fruits,...otherFruits];
console.log(myFruits);

const users = [
    {id : 1, userName: 'Coo'},
    {id : 2, userName: 'Kie'}
];

const newUser = { id : 3, userName: 'Run'};
users.push(newUser);
console.log(users);

const secondNewUser = {id : 4, userName: 'zzang'};

const UpdateUsers = [...users,secondNewUser];
const updateUsers = [secondNewUser, ...users];

console.log(UpdateUsers);
console.log(UpdateUsers[3]);
console.log(updateUsers[3]);

//spread 연산을 해도 원본 배열은 변함 없음
console.log(users.length);


//배열의 복사
const originalArray =  ['one','two','three']; //originalArray 원본 배열
const secondArray  = originalArray

secondArray.pop(); //secondArray의 가장 뒤에 있는 요소 제거 했는데
console.log(originalArray); //원봉이 변함 같은 참조값 참조하고 있기 때문

const originalArrayWithSpread = ['four','five','six'];

const secondArrayWithSpread = [...originalArrayWithSpread];

secondArrayWithSpread.pop(); //second pop 해도,
console.log(originalArrayWithSpread); //원본은 변경 되지 않음

//2.문자열 가능
const aString = 'hello';
const strArray = [...aString]; //문자열의 각 문자들이 배열의 요소로 풀어해져짐
console.log(strArray);

//3.spread with object: spread를 통해 객체를 복사하거나 수정할 수 있음

//기존의 방식을 사용한 object shallow copy
const originalObject = {enabled: true, darkMode: false}
const secondObject = {...originalObject};
secondObject.enabled = false;
console.log(originalObject.enabled);

//spread를 활용한 프로퍼티의 추가

const user = {
    id : 3,
    name : 'john'
};

//user 객체에 isLoggedIn이라는 프로퍼티를 추가하려고 하는데, 새로운 객체에만 적용하고 싶을 때
const updateUser1s = {...user,isLoggedIn:true};
console.log(updateUser1s);

//spread를 활욯한 프로퍼티의 수정
//user객체 에 잇는 name 프로퍼티의 값을 'mary'로 수정해서 새로운 객체로 생성하고자 할 때
const updateUserName = {...user, name: 'mary'};
console.log(updateUserName);