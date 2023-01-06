const btn = document.getElementById('btn');
const color = document.getElementById('color');


btn.addEventListener('click',()=>{
    console.log('button clicked');
    const [red, green, blue]  = getRandomNumber(0, 255); //Array Destructing
   

    const rgbColor = `rgba(${red}, ${green}, ${blue})`;  //ctrl alt

    color.textContent = rgbColor;
    color.style.color = rgbColor;
    document.body.style.backgroundColor = rgbColor;
});



//rgb 랜덤값 추출 함수
function getRandomNumber(min, max) {
    const randomRGBArray = []; //빈 배열
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * (max- min +1) + min );
        randomRGBArray.push(randomNumber);
        
    }
    return randomRGBArray;
}