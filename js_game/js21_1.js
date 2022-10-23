function click1() {
  const s = document.getElementById('next');
  var score = parseInt(s.value);
  console.log(score);
  var grade;
  if(score >= 90) {
    grade = 'A';
  } else if(score >= 80) {
    grade = 'B';
  } else if(score >= 80) {
    grade = 'C';
  } else if(score >= 80) {
    grade = 'D';
  } else {
    grade = 'G';
  }

  const r = document.getElementById('result');
  r.innerText = score + ' is ' + grade;
  console.log(grade);
} 