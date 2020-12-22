const arry = [1,2,3,4,5,6,'moji', false];
// const arry = new Array(1,2,3,4,5,6,);
console.log(arry);
console.log(arry[3]);
arry[5] = 8;
console.log(arry);

arry.push('new item'); // 末尾に追加
arry.unshift('new item2'); // 先頭に追加

const val = arry.pop(); // 末尾を削除
console.log(val); // 削除した値を表示

const val2 = arry.shift(); // 先頭を削除
console.log(val2);

console.log(arry);
console.log(arry.length);