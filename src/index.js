import  analyzer from './analyzer.js';

let texto=document.getElementById('textoarea');
texto.addEventListener('input',calcularMetricas);
let limpiar=document.getElementById('reset-button');
limpiar.addEventListener('click', limpiarTodo );
/* let contadorBoolean=0;

document.addEventListener('keydown', function(event) {
  console.log('ingreso: ');
  // Verificar si la tecla presionada es "Backspace"
  if (event.code === 'Backspace') {
    contadorBoolean--;
    console.log('2do: ' + contadorBoolean);
  }
}); */

function calcularMetricas(valor) {

  let numPalabras = analyzer.getWordCount(valor.target.value);
  let wordcountLi = document.querySelector('[data-testid="word-count"]');
   wordcountLi.innerHTML = 'Palabras: '+ numPalabras;


  let numCaracteres = analyzer.getCharacterCount(valor.target.value) ;
  let charactercountli = document.querySelector('[data-testid="character-count"]');
   charactercountli.innerHTML = 'Caracteres: '+ numCaracteres;

  let numCaractsin = analyzer.getCharacterCountExcludingSpaces(valor.target.value);
   /* if (!numCaractsin){
   contadorBoolean++;
   } */

  let charactersinli = document.querySelector('[data-testid="character-no-spaces-count"]');
   charactersinli.innerHTML = 'Caracteres sin espacio: '+ numCaractsin;

  let numlongmedia = analyzer.getAverageWordLength(valor.target.value);
  let wordlenght = document.querySelector('[data-testid="word-lenght"]');
  wordlenght.innerHTML = 'Promedio de longitud: '+ numlongmedia;

  let soloNumeros = analyzer.getNumberCount(valor.target.value);
  let onlyNumber = document.querySelector('[data-testid="number-count"]');
  onlyNumber.innerHTML= 'Números: '+ soloNumeros;


  let sumaNumeros = analyzer.getNumberSum(valor.target.value);
  let addNumber = document.querySelector('[data-testid="number-sum"]');
  addNumber.innerHTML= 'Suma de números: '+ sumaNumeros;

  let reiniciadorContador = valor.target.value.length;
  if(reiniciadorContador == 0){

    const promediolong = document.querySelector('[data-testid="word-lenght"]');
    promediolong.innerHTML = 'Promedio de longitud: 0';
    const contadorcaractersin = document.querySelector('[data-testid="character-no-spaces-count"]');
    contadorcaractersin.innerHTML = 'Caracteres sin espacio: 0';
  }
}
function limpiarTodo(){
  texto.value= '';
  /* contadorBoolean=0; */

  const contadorPalabras = document.querySelector('[data-testid="word-count"]');
  contadorPalabras.innerHTML = 'Palabras: 0';
  const contadorcaracter = document.querySelector('[data-testid="character-count"]');
  contadorcaracter.innerHTML = 'Caracteres: 0';
  const contadorcaractersin = document.querySelector('[data-testid="character-no-spaces-count"]');
  contadorcaractersin.innerHTML = 'Caracteres sin espacio: 0';
  const num = document.querySelector('[data-testid="number-count"]');
  num.innerHTML = 'Números: 0';
  const sumaNum = document.querySelector('[data-testid="number-sum"]');
  sumaNum.innerHTML = 'Suma de números: 0';
  const promediolong = document.querySelector('[data-testid="word-lenght"]');
  promediolong.innerHTML = 'Promedio de longitud: 0';
 }



