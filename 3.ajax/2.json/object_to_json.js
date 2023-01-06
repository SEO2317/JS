/**
 * JSON 'J'ava 'S'cript 'O'bject 'N'otation'
 * Notation: 표기법
 * 
 * annotation : @, at기호
 * 
 * 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷(format), .jspn이라는 확장자의 파일
 * JS에 종속되지 않는 언어 독립성 데이터 포맷
 * 대부분 프로그래밍 언어에서 사용하는 대표적인 포맷팅 개념
 */

//JSON  작성 방식 Javascript 객체 방식과 유사함

//JS object 
const book = {
    title : '노인과 바다',
    author : '헤밍웨이',
    isSold : false,
    genre : ['소설','경험담']
};


// JSON 작성 방식 : key 값 및 문자열은 ""(쌍따옴표만 가능)로 작성해야함, 홑따옴표 불가
// {
//     "title": "노인과 바다",
//     "author": "헤밍웨이",
//     "isSold": false,
//     "genre": ["novel", "essay"],
// }

//client 측에서 서버로 데이터(일밙거으로 객체)를 전송하기 위해서서는 객체를 문자열화(직렬화, Serivalization)해야 함
console.log(book);
console.log(book.title); //JS object라서 정상적으로 접근 가능

const jsonData = JSON.stringify(book);
console.log(typeof jsonData); //직렬화되었기 때문에 데이터 타입은 String(문자열)
console.log(jsonData.title); //문자열이기 때문에 프로퍼티로 접근 불가
console.log(jsonData[10],jsonData[11]); //문자열이기 때문에 인덱스로 접근



const jsonData2 = JSON.stringify(books);

const books = [
    {id : 1, title: '히농', author : '히농', isSold: "false"},
    {id : 2, title: '히농', author : '히농', isSold: "true"},
    {id : 3, title : '부르크밀러', author : '부르크밀러', isSold: "true"}
];

/**
 * 
 * JSON.Stringify()는 객체뿐만 아니라 배열(Array)도 JSON포맷의 문자열로 직렬화할 수 있음
 * -> 일반적읋 서버로 보내는 데이터는 한개(객체 하나)일 수 도 있지만, 여러 개(배열 형태) 일수도 있기 때문에
 * 
 */

// const books = [
//     {id : 1, title: '히농', author : '히농', isSold: "false"},
//     {id : 2, title: '히농', author : '히농', isSold: "true"},
//     {id : 3, title : '부르크밀러', author : '부르크밀러', isSold: "true"}
// ];

console.log(typeof jsonData2, jsonData2);




const parseData = JSON.parse(jsonData2);
console.log(parseData);
console.log(parseData[0]);