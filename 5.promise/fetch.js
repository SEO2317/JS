/**
 * XMLHttpRequest처럼 요청 전송 기능을 지원하는 Web API
 * 사용법이 간편하고 프로미스를 지원
 * fetch()의 반환 타입은  promise 객체
 * 
 * fetch(url, [options])
 * 
 * fetch()는 HTTP 응답을 나타내는 response 객체를 감싼(wrapping) promise 객체를 반환함
 * fetch()의 첫 번째 인수로 HTTP 요청을 전송할 URL만 전달하면, 기본 요청은 GET 방식
 */

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const promise = fetch(url).then(response => console.log(response)); //Response라는 객체
// console.log(promise);

const promise2 = fetch(url).then(response => response.json()) //Response 객체가 제공하는 메서드 json()
//Response.json(); fetch()가 변환한 프로미스가 감싸고 있는 응답 데이터 중에서 응답중에서 응답 몸체(body)를 취득하기 위해 사용하는 메서드
//-> Response 객체에서 HTTP 응답 몸체(response.body)를 취득 (JSON.parse())
.then(json => console.log(json));

//axios