document.addEventListener('DOMContentLoaded', function() {
    const ta = new TextAnimation('.animate-title'); // インスタンス化
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);

    // const el = document.querySelector('.animate-title');
    // const str = el.innerHTML.trim().split(""); 
    
    // let concatStr = '';
  
    // for(let c of str) {
    //  c = c.replace(' ', '&nbsp;'); // 正規表現での半角スペース　/\s+/
    //  concatStr += `<span class="char">${c}</span>`;
    //  // concatStr = concatStr + `<span class="char">${c}</span>`;
    // }
  
    // el.innerHTML = str.reduce((acc, curr) => {
    //   curr = curr.replace(' ', '&nbsp;'); 
    //   return `${acc}<span class="char">${curr}</span>`;
    // }, "");
});
  
class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(' ', '&nbsp;'); 
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
