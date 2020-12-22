const num = 10;
const bool = Boolean(num);
console.log(bool);
console.log(num);

if(0 == '0' || 0 === '0') {
  console.log('this is true');
} else {
  console.log('this is false');
}

// 値が設定されているときはtrue
// 値が設定されていないとき(undifined, null)はfalse

if(!num) {
  console.log('this is true');
} else {
  console.log('this is false');
}

// ===
// データ型も一致しているか比較する
// ==
// 左辺と右辺のデータ型は比較しない