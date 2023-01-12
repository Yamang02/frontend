var btn2 = document.getElementById('btn2');

/* 익명 함수
btn2.onclick = function () {
    console.log('console 출력 버튼 클릭');
}
*/

function consoleTest() {
    console.log('console 출력 버튼 클릭');
}

// javascript에서 함수도 하나의 객체이다.
btn2.onclick = consoleTest;

var func = function() {

}