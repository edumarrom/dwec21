/*
  Realizamos comprobaciones del tipo NaN y lo volcamos
  al elemento con ID "p1a" y "p1b"
*/
function p1() {
  document.getElementById("p1a").innerHTML = '>> 0/0<br>=> ' + 0/0;
  document.getElementById("p1b").innerHTML = '>> typeof NaN<br>=> ' + typeof NaN;
}
/*
  Guardamos un valor de 16 dígitos para forzar un redondeo.
*/
function p2() {
  document.getElementById("p2a").innerHTML = '>> 9999999999999999<br>=> ' + 9999999999999999;
  document.getElementById("p2b").innerHTML = '>> 0.1 + 0.2<br>=> ' + (0.1 + 0.2);
  document.getElementById("p2c").innerHTML = '>> 0.1 + 0.2 == 0.3<br>=> ' + ((0.1 + 0.2) == 0.3);
}

/*
  Ponemos a prueba la función Math.max().
*/
function p3() {
  document.getElementById("p3a").innerHTML = '>> Math.max(2, 4, 6)<br>=> ' + Math.max(2, 4, 6);
  document.getElementById("p3b").innerHTML = '>> Math.max()<br>=> ' + Math.max();
}
/*
  Realizamos varias pruebas relacionada con la coerción de tipos,
  en escenarios que involucran a números, booleanos, cadenas y arrays.
*/
function p4() {
  document.getElementById("p4p1a").innerHTML = '>>  ["p", "a"] + ["c", "o"]<br>=> '
      + ["p", "a"] + ["c", "o"];
  document.getElementById("p4p1b").innerHTML = '>>  [] + []<br>=> ' + `"${[] + []}"`;
  document.getElementById("p4p2a").innerHTML = '>>  true + true<br>=> ' + (true + true);
  document.getElementById("p4p2b").innerHTML = '>>  true - true<br>=> ' + (true - true);
  document.getElementById("p4p3a").innerHTML = '>>  2 + "7"<br>=> ' + (2 + '7');
  document.getElementById("p4p3b").innerHTML = '>>  "7" + 2<br>=> ' + ('7' + 2);
  document.getElementById("p4p3c").innerHTML = '>>  2 - "7"<br>=> ' + (2 - '7');
  document.getElementById("p4p3d").innerHTML = '>>  "7" - 2<br>=> ' + ('7' - 2);
}
