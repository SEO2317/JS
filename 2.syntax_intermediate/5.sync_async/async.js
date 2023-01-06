// 비동기적인(asynchronous)
/**
 *
 * 현재 실행 중인 작업이 아직 종료 하지 않은 상태라고 해도
 * 다음에 해야 할 작업을 곧바로 실행시키는 방식
 */

    function firstWork(){
        console.log('첫번째 함수가 수행중');
    }

    function secondWork(){
        console.log('두번째 함수가 수행중');
    }

//비동기적인 기술을 제공하는 몇 가지 함수들(setTimeout(), addEventListener())
setTimeout(firstWork, 3 * 1000);
secondWork;

/**
 * 
 * 비동기적인 처리 방심은 현재 실행중인 작업(task)이 종료되지 않은 상태라고 해도,
 * 다음 작업(secondWork())을 곧바로 실행하기 때문에 블로킹이 발생하지 않는다는 장점
 * 단점: 작업의 수행 순서가 보장되지 않음
 * 
 * 비동기적 처리 방식으로 동작하는 JS 함수 setTimeout,SetInterval,HTTP 요청, 이벤트 핸들러(Handler)
 */