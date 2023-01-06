/**
 * Promise의 비동기 처리 상태(pending, fulfilled, rejected)의 변화에 따라
 * 후속 처리를 진행
 * 
 * fulfilled 상태면 처리 결과(응답 데이터)를 가지고 무언가를 해야하고,
 * rejected 상태면 에러 처리를 함
 * 
 * 이러한 후속 처리를 위해 then(), catch(), finally() 등의 메서드를 제공함
 * -> 후속 처리 메서드라고 함
 * 모든 후속 처리 메서드(then(), catch(), finally())들은 다시 Promise 객체를 반환
 */

// fulfilled
new Promise(resolve => resolve('fulfilled 상태')).then(result => console.log(result));

// rejected
new Promise((_ , reject) => reject(new Error('rejected')))
.then(result => console.log(result) , error => console.error(error));

// catch()는 실패했을 때 활용
new Promise((_ , reject) => reject(new Error('rejected')))
.catch(error => console.error(error));

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

getRequestWithPromise('https://jsonplaceholder.typicode.com/posts/1')
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log('요청 종료'));