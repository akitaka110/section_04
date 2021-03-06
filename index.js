/**
 *  const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可
// var val1 = "var変数を再宣言"；
// console.log(val1);

// let val3 = "let変数";
// console.log(val3);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き"

// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "aki",
//   age: 26
// };
// val4.name = "aki110";
// val4.address = "Japan";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "aki110";
const age = "26";
// 「My name is aki110. My age is 26.」

// 従来の方法
const message1 = "My name is " + name + ". My age is " + age + ".";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `My name is ${name}. My age is ${age}.`;
console.log(message2);
