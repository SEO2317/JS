/**
 * 
 * 
 * synchronous : 동기적인
 * 
 * 함수가 호출된 순서대로 순차적으로 실행됨 - 동기(sync) 방식
 * 
 * 
 * 
 * 
 * 
 */

//1.순차 실행
const firstFunc = () => console.log('첫번째 함수가 호출됨');

const someLongWork = () =>{
    console.log('---------');
    console.log('특정 작업 처리 중... 시간이 오래 걸림');
    console.log('---------');
};

const secondFunc = () => console.log('두번째 함수가 호출됨');

//함수들이 작성한 순서대로 순차적으로 호출됨
firstFunc();
someLongWork();
secondFunc();


/**
 * 한 번에 하나의 작업(task)만 처리하기 때문에 특정 작업(ex 특정 함수의 호출 someLongWork())이 길어잘 경우
 * secondFunc()는 someLongWork()가 처리될 때까지 작업이 중단됨
 * 
 * 
 * 
 */

console.log(Date.now());



function sleep(callbackFn, delay) {
    console.log('시간 지연중....');
    const delayTime = Data.now() + delay;


    //현재 시간(Date.now()에 delay를 더한 delayTime이 현재 시간(Date.now())보다 작으면 계속 반복)
    while(Date.now() < delayTime){
        callbackFn;
    }
}

    function firstWork(){
        console.log('첫번째 함수가 호출됨');
    }

    function secondWork(){
        console.log('두번째 함수가 호출됨');
    }

    sleep(firstWork, 3 * 1000);
    secondWork();
