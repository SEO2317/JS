/**
 * 
 * Callback
 * 
 * 
 * 어떤 함수의 인자값(argument)으로 보내지는 함수를 callback function이라고 함
 * 
 * 
 */

//콜백 함수 - 기본
function greeting(name){
    console.log('Hello ' + name);
}

//어떤 함수 processUserInput
function processUserInput(name, callbackFn) {
    //callbackFn = function greeting(name) { ... }
    callbackFn(name);
}


processUserInput('Yoo',greeting);//어떤 함수 processUserInput의 인자 or 인수로 함수 greeting 전달
//함수 greeting이 콜백함수로 활용됨


const coupang = {
    pname: '사과'
};

function waitCoupang(pname, callback) {
    console.log(`쿠팡에서 +${pname} 가 도착했다.`);

    callback();
    
};

function bringItToNeighbor() {
    console.log('옆집 아주머니에게 전달완료!');
};

waitCoupang('사과', bringItToNeighbor);

const button = document.querySelector('button');
console.log(button); //프로퍼티 조회가 어려움

const buttonClickHandler = () => { console.log('button clicked') };


//화살표 함수 그 자체를 인수로 전달
button.addEventListener('click',() => console.log('button clicked')); //button object가 가지고 있는 메서드 addEventListener(); //콜백함수 때문에 가능하다.


button.addEventListener('click',() => {
    console.log('button clicked');
    console.log('button clicked');
    console.log('button clicked');
});

