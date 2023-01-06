const countValue = document.getElementById('value');
// const countButtons = document.getElementsByClassName('btn');
const countButtons = document.querySelectorAll('button');
console.log(countButtons);

// const [decreaseButton, resetButton, increaseqButton] = countButtons;


// for(let i=0;i<fish.length;i++){
//     console.log(fish[i]);
//


//for each() array 객체가 가지고 있는 method
// fish.forEach(aFish => {
//     console.log(aFish);
// });


let count = 0;

countButtons.forEach(button => {
    button.addEventListener('click',(event)=>{
        const currentTarget = event.currentTarget;
        // console.dir(currentTarget); //classList 프로퍼티 확인

        const styles = currentTarget.classList[1];
        // console.log(styles);

       count = styles !== 'reset' ? (count = styles === 'decrease' ? --count : ++count) : 0;

        console.log(count);
    });
});