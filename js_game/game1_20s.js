function check_time() {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');

  console.log(btn.innerText);

  if(btn.innerText == '시작') {
    //시작버튼 클 릭 코드
    start = new Date();
    btn.innerText = '종료';
    msg.innerText = '20초를 세고 종료버튼을 누르시나요?';
  } else {
    // 종료 버튼 클릭 코드
    var end = new Date();
    var et = (end - start) / 1000;
    var et = parseInt(et);
    btn.innerText = '시작';
    btn.style.backgroundColor = 'FFAAAA';
    msg.innerText = '지난시간은 ' + et + '초 입니다.'
  }
}