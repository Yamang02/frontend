//1. 이벤트
//1) 인라인 방식
function test1(event) {
  // alert('안녕하세요.')

  // 매개값으로 이벤트 객체를 가져올 수 없다.
  console.log(event);

  // 가져오려면
  console.log(window.event);
  console.log(window.event.target);
  console.log(this); // window 객체를 가리킨다.
  console.log(this.event);
  console.log(this.event.target);
}
// 2) 프로퍼티 방식
let btn1 = document.getElementById("btn1");

// btn1.onclick = function (event) {
//   console.log(event.target);
//   console.log(window.event.target);
//   console.log(this); //이벤트가 발생한 요소 객체를 가리킨다.
// };

btn1.onclick = (event) => {
  console.log(event);
  console.log(window.event.target);
  console.log(this); // window가 나온다.

  // 이벤트 핸들러 제거
  btn1.onclick = null;
};

// 3) 메소드 방식
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function (event) {
  console.log(event);
  console.log(window.event.target);
  console.log(this);
});

btn2.addEventListener("click", (event) => {
  console.log("----------------------");
  console.log(event.target);
  console.log(window.event.target);
  console.log(this);
});

function clickEventTest() {
  console.log("----------------------");
  console.log("clickEventTest() 호출");
}

btn2.addEventListener("click", clickEventTest);
btn2.removeEventListener("click", clickEventTest);

//2.태그(요소)별 기본 이벤트 제거
// 1) 기본 이벤트 제거 1
function passwordCheck() {
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;

  console.log(pass1);
  console.log(pass2);

  if (pass1 !== pass2) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }
}

let submit = document.getElementById("submit");

// submit.onclick = () => {
//   let pass1 = document.getElementById("pass1").value;
//   let pass2 = document.getElementById("pass2").value;

//   console.log(pass1);
//   console.log(pass2);

//   if (pass1 !== pass2) {
//     alert("비밀번호가 일치하지 않습니다.");
//     return false;
//   }

//   return true;
// };

submit.addEventListener("click", (event) => {
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;

  console.log(pass1);
  console.log(pass2);

  if (pass1 !== pass2) {
    alert("비밀번호가 일치하지 않습니다.");
    event.preventDefault();
  }

  return true;
});

// 영문자, 숫자 조합 어케함??
// function idCheck() {
//     let idInput = document.getElementById('idInput').value;

//     if (idInput.length < 5 | idInput.length > 12) {
//         alert('5~12자 사이로 입력해 주세요');
//         return false;

//     }
// }

let submit2 = document.getElementById("submit2");

submit2.addEventListener("click", (event) => {
  let userId = document.getElementById("idInput").value;
  // 정규표현식
  let regExp = /^[a-zA-Z0-9]{5,12}$/;

  console.log(userId);

  if (!regExp.test(userId)) {
    alert("아이디를 정상적으로 입력해 주세요.");
    event.preventDefault();
  }
});
