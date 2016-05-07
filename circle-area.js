function calcCircleArea(r) {
  var pi = Math.PI;
  return (pi * r * r);
}
document.getElementById('one').innerHTML = "r = 7;" + " area = " + calcCircleArea(7);
document.getElementById('two').innerHTML = "r = 1.5;" + " area = " +calcCircleArea(1.5);
document.getElementById('three').innerHTML = "r = 20;" + " area =" +calcCircleArea(20);
