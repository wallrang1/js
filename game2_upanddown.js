const result = document.getElementById("result");
const num =document.getElementById("num");

var com = Math.random() * 100 + 1;
com = Math.floor(com);

cnt = 0

function check_num() {

  var usr = parseInt(num.value);

  cnt +=1;
  
  if(usr > com) {
    msg = 'DOWN!';
  } else if(usr < com) {
    msg = "UP!";
  } else if(usr == com){
    msg = 'CORRECT!';
    msg += '\n' + cnt + '번째 맞히셨군요!'
  } else {
    msg = "1~100숫자를 입력해(주세요)!"
  }
  result.innerText = msg;
}