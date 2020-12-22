// const person = {}; オブジェクトリテラル
// person.name = 'Code Mafia';

// const person = new Object();

const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  // メソッド
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
};

// ドット記法
console.log(person.name);
console.log(person.interests.music);

// 値の更新（オブジェクトの中身は変更可能）
person.age = 12;
console.log(person.age);

// ブラケット記法
const ageKey = 'age';
person[ageKey] = 13;
console.log(person.age);

person.getFullName();
