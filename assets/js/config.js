function validarPassword(){


  //Asignando en variables declaradas el valor seleccionado por usuario. 
  let valor1 = document.getElementById('numero1').value;
  let valor2 = document.getElementById('numero2').value;
  let valor3 = document.getElementById('numero3').value; 
  

  // Mostrar el resultado
  const password = document.getElementById('validarPassword');

  if (valor1 === '9' && valor2 === '1' && valor3 === '1') {
    password.innerText = `El password [1]:  ${valor1}, ${valor2}, ${valor3} es correcto`;
} else if (valor1 === '7' && valor2 === '1' && valor3 === '4') {
    password.innerText = `El password [2]:  ${valor1}, ${valor2}, ${valor3} es correcto`;
} else {
    password.innerText = `El password:  ${valor1}, ${valor2}, ${valor3} es incorrecto`;
}
}