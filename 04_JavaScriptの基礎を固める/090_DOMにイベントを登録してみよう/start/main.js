const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// const hello = function() {
//   alert('hello');
// }
// btn.addEventListener('click', hello);

function changeColor() {
  h1.style.color = 'red';
};
function changeBgColor() {
  h1.style.backgroundColor = 'green';
};
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

btn.onclick = changeColor;
btn.onclick = changeBgColor //イベントハンドラは上書きされる
//btn.removeEventListener('click', changeBgColor);