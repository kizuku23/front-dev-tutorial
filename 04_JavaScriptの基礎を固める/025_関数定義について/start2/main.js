function hello(name, age) {
  //let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age; //実行元に返す, 戻り値
}

//　関数名を持たない関数　→　無名関数
//　関数の実行文より前で
// const hello = unction(name, age) {
//   console.log('hello ' + name + age);
//   return name + age;
// }

hello('Code Mafia', 10); //関数の実行
const returnVal = hello('Code Mafia2', 20);
console.log(returnVal);

// let name = 'Code Mafia';
// console.log('hello ' + name);
// let name2 = 'Code Mafia 2';
// console.log('hello ' + name2); 
