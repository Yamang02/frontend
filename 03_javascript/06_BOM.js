window.onload = function () {
  // 1. window 객체
  // 1) window.open()
  let btn1 = document.getElementById("btn1");

  btn1.addEventListener("click", () => {
    // window.open('https://www.naver.com'); 새탭
    window.open("https://www.naver.com");
    window.open("https://www.naver.com"), "naver", (innerWidth = 50);
  });

  // 2) 타이머
  // 1) window.setTimeout()
  let bin2 = document.getElementById("btn2");
  btn2.addEventListener("click", () => {
    let timerId = 0;
    let newWindow = window.open();
    newWindow.alert("3초 후에 이 페이지는 종료됩니다.");
    // newWindow.close();

    //일정 시간 후에 콜백 함수를 한 번 실행
    timerId = window.setTimeout(() => newWindow.close(), 3000);

    // 타이머 ID를 clearTimeout()에 지정하면 해당 ID의 타이머를 취소할 수 있다.
    window.clearTimeout(timerId);

    console.log(timerId);
    // 일정시간
  });

  //2) window.setInterval()
  let btnStart = document.getElementById("btnStart");
  let timerId = 0;
  let btnEnd = document.getElementById("btnEnd");

  btnStart.addEventListener("click", () => {
    let div1 = document.getElementById("div1");

    timerId = window.setInterval(() => {
      let now = new Date();

      div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : <span id="second"> ${now.getSeconds()}</span>`;
    }, 1000);
  });

  btnEnd.addEventListener("click", () => {
    window.clearInterval(timerId);
  });
};
