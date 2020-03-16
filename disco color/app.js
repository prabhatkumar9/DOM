


function randomColorGen() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBG() {
  let color = document.getElementById('color');
  color.style.backgroundColor = randomColorGen();
}

function changeText() {
  let text = document.getElementById('text');
  if (text.innerHTML == 'ON THE FLOOR BABY') {
    text.innerHTML = 'Hit It Hard , Baby';
  } else if (text.innerHTML == 'Hit It Hard , Baby') {
    text.innerHTML = 'Rock The Party';
  } else if (text.innerHTML == 'Rock The Party') {
    text.innerHTML = 'ON THE FLOOR BABY';
  }
}

function checkBG() {
  randomColorGen();
  changeBG();
  changeText();
}

setInterval(checkBG, 200);