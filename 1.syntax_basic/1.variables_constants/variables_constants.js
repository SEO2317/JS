//한줄 주석
/*
여러 줄 주석
*/

//JS코드만 작성하는 부분
/**
 * JavaScript에서의 변수 키워드(keyword, 예약어)
 * 
 * var, 
 * let : 재할당이 가능
 * const : 재할당 불가(Java final)
 * 
 * 변수네이밍 규칙 cameCase(Java와 동일)
 * 
 */

//변수(variable)
let username = 'Yoo'; //문자열에 홑따옴표(single quote) 사용 가능
console.log(username);

username = 'Why';
console.log(username);

//상수(Constants)
const allUsers = 20;

//allUsers = 5; //Uncaught TypeError: Assignment to constant variable.

//일단은 const로 변수를 만들고 작성 과정에 특정 변수는 재할당이 필요할 것 같이 보이면, 그때 그 변수만 let으로 변경
