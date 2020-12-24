document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split(""); 
  
  // let concatStr = '';

  // for(let c of str) {
  //  c = c.replace(' ', '&nbsp;'); // 正規表現での半角スペース　/\s+/
  //  concatStr += `<span class="char">${c}</span>`;
  //  // concatStr = concatStr + `<span class="char">${c}</span>`;
  // }

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;'); 
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

// reduceで書き直すメリット
// concatStrを定義する必要がなくなる
// reduceはできることが限られているので他の人に開発の意図を伝えやすい