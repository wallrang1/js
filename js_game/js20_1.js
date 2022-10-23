function a() {
  const in1 = document.getElementById('first');
  const in2 = document.getElementById('second');
  const out1 = document.getElementById('result');

  var first = parseInt(in1.value);
  var second = parseInt(in2.value);

  out1.innerText = first + second
  
}