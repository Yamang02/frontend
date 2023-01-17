// 1. 함수 선언
// 1) 함수
function test1() {
  alert("test1() 함수 호출");
}

// 2) 익명 함수
let btn1 = document.getElementById("btn1");

// btn1.onclick = function() {
//     alert('익명 함수 실행')
// };

// 콜백함수???
// 공통된 부분을 제외하고 변경되어야 할 부분만 별도로 함수로 넘겨 받아서 실행시키는 함수
btn1.addEventListener("click", function () {
  alert("익명 함수 실행!!");
});

// 스스로 실행하는 함수 (만들어지자마자 한 번 실행 시키기)
// 함수 정의와 동시에 즉시 실행되는 함수로 한 번만 호출되며 이름이 정의되지 않았기 때문에 다시 호출할 수 없다.
(function (a, b) {
  document.getElementById("p1").innerHTML = `a:${a}, b : ${b}, a + b : ${
    a + b
  } (자동으로 혼자 실행)`;
})(10, 20);

// 3) 화살표 함수
// [표현법]
//    1) 매개 변수 처리
//        - 매개 변수가 없을 때 : () => { ... }
//        - 매개 변수가 하나일 때 : (x) => { ... }  | x => { ... }
//        - 매개 변수가 두 개 이상일 때 : (x, y, ... ) => { ... }
// //    2) 리턴 처리
//           - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
//               (x, y)  => {
//                     .. 실행 구문 ..
//                     return 값;
//               }
//          - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
//               (x, y) => x + y;

let btn2 = document.getElementById("btn2");

// btn2.addEventListener('click', function() {
//     alert('익명 화살표 함수 실행');
// })

btn2.addEventListener("click", () => alert("화살표 함수 실행!!"));

// 2. 함수 호출
// 1) 매개 변수
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
  // argTest("안녕하세요");
  // argTest();
  // JS에서 매개변수를 넘겨주지 않으면 undefined 가 출력된다.
  argTest("안녕하세요.", "반갑습니다.");
  // 매개값이 초과되어도 에러가 나지 않는다.
});

// 기본 값 설정은 변수 = 기본값으로 설정
// 매개 변수에 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다.
function argTest(value = "매개값 없음") {
  alert(value);
}

// 2) argument 객체

// btn4.addEventListener('click', () => {}
// 화살표 함수에서는 argument 객체를 생성하지 않는다.
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  // sum();
  // sum(1, 3, 5);
  // sum(6, 7, 8, 9, 10);

  // let result = sum();
  result = sum(125, 600);
  // result = sum(125, 600, 400);

  alert(`sum : ${result}`);
});

function sum() {
  let result = 0;

  console.log(arguments);
  console.log(arguments.length);
  console.log(typeof arguments);
  // Symbol.iterator이 들어가 있으면 for of 구문으로 value들을 추출할 수 있다.

  // for (let i = 0; i < arguments.length; i++) {
  //   result += arguments[i];
  // }

  for (const value of arguments) {
    result += value;
  }

  return result;
}

// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
  let random = 0;
  random = ran();

  alert(`random : ${random}`);
});

// 1 ~ 100까지의 랜덤값을 리턴하는 함수
function ran() {
  let result = 0;

  result = parseInt(Math.random() * 100) + 1;

  return result;
  // result에 들어가 있는 값이 복사되어서 return되는 것이고 변수는 사라진다.
}

// 2) 익명 함수 리턴
let btn6 = document.getElementById("btn6");

btn6.addEventListener("click", () => {
  //    let func = funcTest();

  //    func();
  funcTest()();
});

function funcTest() {
  // 클로저
  // - 내부 함수가 사용하는 외부 함수의 지역 변수는 내부 함수가 소멸할 때까지 소멸하지 않는 특성을 클로저라고 한다.
  let name = "홍길동";

  // let func = function () {
  //   alert("안녕하세요!!!");
  // };

  // return func;

  return function () {
    alert(`${name}님 안녕하세요.`);
  };

  // 내부에 있는 함수가 끝날 때까지 소멸하지 않는다.
}

// 4. 내장 함수
// 1) eval()
let btn7 = document.getElementById("btn7");

btn7.addEventListener("click", () => {
  let p2 = document.getElementById("p2");
  let calc = document.getElementById("calc");

  p2.innerHTML = `실제 입력된 값 : ${calc.value}<br>`;
  p2.innerHTML += `eval() : ${eval(calc.value)}<br>`;
});

// 2) isFinite(), isNaN()
let btn8 = document.getElementById("btn8");

btn8.addEventListener("click", () => {
  let p3 = document.getElementById("p3");

  p3.innerHTML = "<h4>안녕하세요</h4>";
  p3.innerHTML += `10 / 0 : ${10 / 0}<br>`;
  p3.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
  p3.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;
  p3.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
  p3.innerHTML += `isFinite(10 / 2) : ${isFinite(10 / 2)}<br>`;
  p3.innerHTML += `10 / 'a' : ${10 / "a"}<br>`;
  p3.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / "a")}<br>`;
  p3.innerHTML += `isNaN(10 / 2) : ${isNaN(10 / 2)}<br>`;
});
