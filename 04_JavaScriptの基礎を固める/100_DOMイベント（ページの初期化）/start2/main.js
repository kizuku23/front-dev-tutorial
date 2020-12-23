const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

document.addEventListener("DOMContentLoaded", function () {
    dcl.classList.add('done');
});

// 画像が読み込まれてから表示
window.addEventListener("load", function () {
    load.classList.add('done');
});