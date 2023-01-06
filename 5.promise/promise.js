/**
 * 기존의 XMLHttp 방식으로는 콜백 헬, 예외처리 등이 곤란함
 * 그 대처방안으로 등장한 것이 ES6에서 나온  Promise
 * 
 * callback_hell.js에서 본 것처럼 콜백 헬, 예외 처리 등을 해결하기 위해 사용
 * 
 */

//비동기 요청의 성공 여부 isSuccess
const isSuccess = false;

const promise = new Promise((resolve, reject) => {
    //promise 생성자 함수(메서드)의 콜백 함수내에서 비동기 처리 수행
    //promise 생성자 함수? new Promise()

    //비동기 처리가 성공하면 콜백함수의 인수로 전달받은 resolve()를 호출함
    //비동기 처리가 실패하면 reject()를 호출함

    if(isSuccess){
        resolve('비동기 처리에 따른 응답 결과값');
    } else {
        reject('비동기 처리에 따른 예외처리 작성 부분');
    }

});
console.log(promise);

//PromiseState(비동기 처리 상태 정보)
//PromiseResult(비동기 처리 결과 정보, 서버로부터 응답받은 결과값)


/**
 * 비동기적 처리의 3가지 진행 상태
 * pending: 비동기적 처리가 아직 수행되지 않은 상태
 * fulfilled: 비동기적 처리가 수행된 상태(성공)
 * rejected: 비동기 처리가 수행된 상태(실패)
 * 
 * new Promise(callback)를 통해 생성한 직후가 pending 상태
 * 이후 비동기적 처리가 수행되면, 비동기 처리 결과에 따라 promise 객체의 state가 변경됨
 * 
 * 처리가 성공했다? resolve()를 호출,Promise 객체의 상태로 fulfiled 상태로 변경
 * 실패하면? reject() 호출, Promise 객체의 상태를 reject로 상태로 변경
 * 
 * 정리하면, promise는 비동기 처리 여부 상태와 처리된 응답 결과를 관리하는 객체
 */

// promise를 활용한 비동기 요청
const getRequestWithPromise = url => {
    return new Promise((resolve, reject) => {
        // 비동기 요청 진행
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                // 응답 성공
                resolve(JSON.parse(xhr.response));
            } else {
                // 응답 실패
                reject(new Error(xhr.status));
            }
        }
    });
};

 console.log(getRequestWithPromise('https://jsonplaceholder.typicode.com/posts/1'));