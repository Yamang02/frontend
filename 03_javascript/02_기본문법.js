// 1. 변수
// 1) 변수 선언
// 전역 변수 선언
str1 = "전역변수";
var str2 = "var 전역변수";
let str3 = "let 전역변수";

// console.log(str1);
// console.log(str2);
// console.log(str3);

/* let으로 선언하면 window하위로 들어가지 않는다.(조회되지 않음) window.str3 = undefined*/

function add(a, b) {
  return a + b;
}

var str4 = "지역변수";
let str5 = "지역변수";
str6 = "전역변수";
var str7;

var str2 = "var 지역변수";

console.log(str1);
console.log(window.str1);
console.log(this.str1);

console.log(str2); // var 지역변수가 우선
console.log(window.str2); // var 전역변수 호출
console.log(this.str2); // var 전역변수 호출

console.log(str3); // let 전역변수
console.log(window.str3); // window에 속하지 않음
console.log(this.str3); // window에 속하지 않음

console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);

// var, let, const의 차이점
var num = 0;
console.log(num);

var num = 10;
console.log(num);

var num = 20;
console.log(num);

let num2 = 10;
console.log(num2);

//let keyword는 중복된 변수 선언을 막아줌
// let num2 = 20;
// console.log(num)2;

const num3 = 10; //상수는 선언과 동시에 초기화
console.log(num3);

//   const num3 = 10;

//상수는 값의 재할당이 불가능하다.
//   num3 = 20;
console.log(num3);

console.log("------------------------------------------------");

// 2) 유효 범위(스코프)
// 함수 안에서 var로 선언된 변수는 함수 유효 범위를 갖는다.
if (true) {
  var num4 = 10;
  console.log(num4);
}

console.log(num4);

//함수 안에서 let,const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
if (true) {
  let num5 = 50;
  const num6 = 60;
}

//   console.log(num5);
//   console.log(num6);

// 3) 호이스팅 동작 방식
// js는 변수를 먼저 만들고, 그 이후에 값을 대입한다.
console.log(num7); //undefined가 출력됨
var num7 = 70;

// let과 const로 선언된 변수는 선언되기 전에 접근을 막는다. 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// console.log(num8);
// let num8 = 80;

// console.log(num9);
// const num9 = 90;
// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 이벤트 속성이다.
window.onload = function () {
  document.getElementById("heading1").style.color = "green";
};

// 2. 자료형
function typeTest() {
  let name = "문인수"; // 문자열
  let age = 20; // 숫자
  let height = 183.5; // 숫자
  let check = false; //논리값
  let hobbies = ["축구", "농구", "야구"];
  let user = {
    id: "ismoon",
    name: "문인수",
    age: 20,
    height: 183.5,
    // hobies: ["축구", "농구", "야구"],
    // hobbies : hobbies
    //property명과 변수명이 동일하면 한번만 쓸 수도 있다.
    hobbies,
  };

  let addFunc = function (x, y) {
    return x + y;
  };

  let div1 = document.getElementById("div1");

  console.log(hobbies);
  console.log(user);
  console.log(addFunc);
  console.log(addFunc(10, 20));

  //  typeof() 연산자는 값의 자료형을 확인하는 연산자이다.
  div1.innerHTML = "<h4>안녕하세요.</h4><br>";
  div1.innerHTML += `name : ${name}, type : ${typeof name}<br>`;
  div1.innerHTML += `age : ${age}, type : ${typeof age}<br>`;
  div1.innerHTML += `height : ${height}, type ${typeof height}<br>`;
  div1.innerHTML += `hobby : ${hobbies}, type ${typeof hobbies}<br>`;
  div1.innerHTML += `user : ${user}, type : ${typeof user}<br>`;
  div1.innerHTML += `addFunc : ${addFunc}, type : ${typeof addFunc}<br>`;
  // name을 중괄호로 묶으면 왜 object가 나옴??
}

// 3. 데이터 형변환
function plusTest() {
  let div2 = document.getElementById("div2");
  let result1 = 7 + 7; //14
  let result2 = 7 + `7`; // '77'
  let result3 = `7` + 7; // '77'
  let result4 = 7 + 7 + "7"; //'147'
  let result5 = 7 * "7"; //49
  let result6 = "7" - 3; //4
  let result7 = "a" * 3; //NaN

  div2.innerHTML = "<h4>안녕하세요.</h4>";
  div2.innerHTML += `result1 :${result1}<br>`;
  div2.innerHTML += `result2 :${result2}<br>`;
  div2.innerHTML += `result3 :${result3}<br>`;
  div2.innerHTML += `result4 :${result4}<br>`;
  div2.innerHTML += `result5 :${result5}<br>`;
  div2.innerHTML += `result6 :${result6}<br>`;
  div2.innerHTML += `result7 :${result7}<br>`;
}

function castingTest() {
  let div3 = document.getElementById("div3");

  //문자열 > 숫자
  div3.innerHTML = `${Number("3")}, type : ${typeof Number("3")}<br>`;
  div3.innerHTML += `${parseInt("3")}, type : ${typeof parseInt("3")}<br>`;
  div3.innerHTML += `${parseInt("a")}, type : ${typeof parseInt("a")}<br>`;
  div3.innerHTML += `${parseFloat("3.45")}, type : ${typeof parseFloat("3.45")}<br>`;

  //숫자 > 문자열
  div3.innerHTML += `${String(3)}, type : ${typeof String(3)}<br>`;
}

// 4. 연산자
// '=='연사자와 '===' 연산자의 차이점
function opTest() {
    let div4 = document.getElementById('div4');
    
    div4.innerHTML = '<h4>안녕하세요</h4>'
    div4.innerHTML += `'7' == 7 : ${'7' == 7}<br>`;
    div4.innerHTML += `'7' == '7' : ${'7' == '7'}<br>`;
    div4.innerHTML += `'7' == '8' : ${'7' == '8'}<br>`;
    div4.innerHTML += `'7' == '8' : ${'undefi' == '8'}<br>`;

    div4.innerHTML += '<br><br>'

    div4.innerHTML += `'7' === 7 : ${'7' === 7} <br>`;
    div4.innerHTML += `'7' === '7' : ${'7' === '7'} <br>`;

}

