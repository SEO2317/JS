/**
 * JS에서는 비동기 처리를 위한 하나의 패턴으로 콜백 함수 패턴으로 사용함
 */

//전통적인 콜백 패턴
// const xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
// xhr.send();

// xhr.onload = () => {
//  if(xhr.status === 200){
//     console.log(xhr.response);
//  }
// };


//Callback hell ? 어떠한 비동기 요청에 대한 처리 결과로 얻은 하나의 값 또 다른 비동기 요청을 하고자 할때 발생할 수 있는 가독성 저하 케어
const get = (url, callbackFn) => {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
   xhr.send();

   xhr.onload = () => {
      if(xhr.status === 200){
         callbackFn(JSON.parse(xhr.response));
      }
     }
};

console.log(get);


const url = 'https://jsonplaceholder.typicode.com';


//id가 1인 post의 userId 취득
get(`${url}/posts/1`, (userId) => {
   console.log(userId);

   //post의 userId의 id를 활용하여 user의 정보 취득
   get(`${url}/users/${userId.id}`,userInfo => {
      console.log(userInfo);
   })
});