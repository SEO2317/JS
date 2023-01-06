const xhr = new XMLHttpRequest(); //XMLHttpRequest API 객체 생성(로딩)
//XMLHttpRequest 객체가 제공하는 메서드를 활용하면 HTTP 요청 전송 가능

//요청을 보낼 준비
//xhr.open(요청 메서드, 요청 URL 주소);

//'GET', 서버의 데이터를 조회하고 싶을때
xhr.open('GET','https://jsonplaceholder.typicode.com/todos');
console.log(`OPEN, ${xhr.readyState}`); // readyState 프로퍼티 : 요청 준비 상태 체크

//준비 상태(readyState) 프로퍼{티의 값이 바뀔 때마다 아래의 함수가 호출됨
xhr.onreadystatechange = () => {
    if(xhr.readyState === 2) {
        console.log(`HEADERS_RECEIVED,${xhr.readyState}`);
    }


    //데이터 응답, 로딩 완료의 같음
    if(xhr.readyState === 4 && xhr.status == 200) {
        console.log(`DONE,${xhr.readyState}`);
        //서버로부터 받은 데이터를 조회할 수 있는 부분
        console.log(xhr.responseText);
    }
};

xhr.onprogress = () => console.log(`LOADING,${xhr.readyState}`);
xhr.onload = () => console.log(`DONE,${xhr.readyState}`);

//실제 요청 전송
xhr.send();


/**
 * readyState: HTTP 요청의 현재 상태를 가지고 있는 정수값 프로퍼티
 * 0-(UNSENT) - 초기화 전, open() 호출하기 전
 * 1-(OPENED) - 열림, open()를 호출했고, send()는 호출하지 않은 상태
 * 2-(HEADERS_RECEIVED) - 요청 전송, send()를 호출했지만 서버로부터 응답은 받지 못한 상태
 * 3-(LOADING) - 데이터 수신중, 응답 데이터의 일부를 받고 있는 상태
 * 4.(DONE) - 완료. 응답 데이터를 모두 받은 상태
 * 
 * 2.status: HTTP요청에 대한 응답의 성공 여부를 나타내는 값
 * ex) 200(응답 성공), 404(요청 실패, 잘못된 경로 요청으로 인한)
 * 
 * 
 * 3.statusText : HTTP 요청에 대한 응답 메시지를 나타내는 문자열
 * ex)status가 200일 경우, 'OK'
 * 
 * 4.responseType : 응답된 데이터의 타입 등
 * ex) document, json, text, data 등
 * 
 * 이벤트 핸들러와 관련된 프로퍼티
 * onreadystatechange : readystate 프로퍼티의 값이 변경된 경우
 * 
 * 메서드
 * 1.open() : HTTP 요청 초기화(준비 단계)
 * 2.send() : HTTP 실제 전송
 *  */