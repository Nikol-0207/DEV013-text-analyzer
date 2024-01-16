import  analyzer from './analyzer.js';

const texto=document.querySelector('[name="user-input"]');
texto.addEventListener('input',calcularMetricas);
const limpiar=document.getElementById('reset-button');
limpiar.addEventListener('click', limpiarTodo );

function calcularMetricas() {

  const numPalabras = analyzer.getWordCount(texto.value);
  const wordcountLi = document.querySelector('[data-testid="word-count"]');
  wordcountLi.innerHTML = 'Palabras: '+ numPalabras;


  const numCaracteres = analyzer.getCharacterCount(texto.value) ;
  const charactercountli = document.querySelector('[data-testid="character-count"]');
  charactercountli.innerHTML = 'Caracteres: '+ numCaracteres;

  const numCaractsin = analyzer.getCharacterCountExcludingSpaces(texto.value);
  const charactersinli = document.querySelector('[data-testid="character-no-spaces-count"]');
  charactersinli.innerHTML = 'Caracteres sin espacio: '+ numCaractsin;

  const numlongmedia = analyzer.getAverageWordLength(texto.value);
  const wordlenght = document.querySelector('[data-testid="word-length-average"]');
  wordlenght.innerHTML = 'Promedio de longitud: '+ numlongmedia;

  const soloNumeros = analyzer.getNumberCount(texto.value);
  const onlyNumber = document.querySelector('[data-testid="number-count"]');
  onlyNumber.innerHTML= 'Números: '+ soloNumeros;


  const sumaNumeros = analyzer.getNumberSum(texto.value);
  const addNumber = document.querySelector('[data-testid="number-sum"]');
  addNumber.innerHTML= 'Suma de números: '+ sumaNumeros;

  const reiniciadorContador = texto.value.length;
  if(reiniciadorContador === 0){

    const promediolong = document.querySelector('[data-testid="word-length-average"]');
    promediolong.innerHTML = 'Promedio de longitud: 0';
    const contadorcaractersin = document.querySelector('[data-testid="character-no-spaces-count"]');
    contadorcaractersin.innerHTML = 'Caracteres sin espacio: 0';
    const num = document.querySelector('[data-testid="number-count"]');
    num.innerHTML = 'Números: 0';
  }
}
function limpiarTodo(){
  texto.value= '';

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
  const promediolong = document.querySelector('[data-testid="word-length-average"]');
  promediolong.innerHTML = 'Promedio de longitud: 0';
}



