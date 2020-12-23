const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// const hello = function() {
//   alert('hello');
// }

function hello() {
  this.style.color = 'red';
  console.log(this);
  alert('hello');
};

function changeColor() {
  h1.style.color = 'red';
};
function changeBgColor() {
  h1.style.backgroundColor = 'green';
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
btn.addEventListener('click', hello);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor; イベントハンドラは1つしか登録できない
// btn.removeEventListener('mouseenter', hello);

