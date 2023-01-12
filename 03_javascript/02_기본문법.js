// 1. 변수
// 1) 변수 선언
// 전역 변수 선언
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';

console.log(str1);
console.log(str2);
console.log(str3);

/* let으로 선언하면 window하위로 들어가지 않는다.(조회되지 않음) window.str3 = undefined*/

function add(a, b) {
    return a + b;
}

// 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 이벤트 속성이다.
window.onload = function() {
    document.getElementById('heading1').style.color = 'green';

    var str4 = '지역변수';
    let str5 = '지역변수';
    str6 = '전역변수';

    console.log(str4);
    console.log(str5);
    console.log(str6);

}

