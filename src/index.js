import  analyzer from './analyzer.js';

let texto=document.getElementById('textoarea');
texto.addEventListener('input',calcularMetricas);
let limpiar=document.getElementById('reset-button');
limpiar.addEventListener('click', limpiarTodo );



function calcularMetricas(valor) {
  console.log(valor);
  /* var texto = document.getElementById("textoarea").value; */
  let numPalabras = analyzer.getWordCount(valor.target.value);
  let wordcountLi = document.querySelector('[data-testid="word-count"]');
  console.log(numPalabras);
   wordcountLi.innerHTML = 'Palabras: '+ numPalabras;
 /*  var numCaracteres = analyzer.getCharacterCount(texto) ;


  var numCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(texto); */



 /*  document.getElementById("characters").textContent = numCaracteres;
  document.getElementById("characters-no-space").textContent = numCaracteresSinEspacio; */

}
function limpiarTodo(){
  texto.value= '';

  const contadorPalabras = document.querySelector('[data-testid="word-count"]');
  contadorPalabras.innerHTML = 'Palabras: 0';
 }



