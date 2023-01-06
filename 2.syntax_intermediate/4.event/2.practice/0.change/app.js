const btn = document.getElementById('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

const title = document.getElementById('color');

let func = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    title.style.color = rndCol;
    title.textContent = rndCol;
    document.body.style.backgroundColor = rndCol;
  }

  
  btn.onclick = func;
  
func();
console.log(title.textContent);