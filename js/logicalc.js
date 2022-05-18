function sumar() {
  var numero1 = document.getElementById("valor1").value;
  var numero2 = document.getElementById("valor2").value;
  var resultado = 0;
  console.log(parseFloat(numero1) != NaN);
  if (!isNaN(parseFloat(numero1))) {
    resultado = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById('Resultado').value = resultado;
  } else {
    alert("Dato incorrecto. Ingrese un número");
  }
}

function restar() {
  var numero1 = document.getElementById("valor1").value;
  var numero2 = document.getElementById("valor2").value;
  var resultado = parseFloat(numero1) - parseFloat(numero2);
  document.getElementById('Resultado').value = resultado;
}

function multiplicar() {
  var numero1 = document.getElementById("valor1").value;
  var numero2 = document.getElementById("valor2").value;
  var resultado = parseFloat(numero1) * parseFloat(numero2);
  document.getElementById('Resultado').value = resultado;
}

function dividir() {
  var numero1 = document.getElementById("valor1").value;
  var numero2 = document.getElementById("valor2").value;
  var resultado = parseFloat(numero1) / parseFloat(numero2);
  document.getElementById('Resultado').value = resultado;
}
