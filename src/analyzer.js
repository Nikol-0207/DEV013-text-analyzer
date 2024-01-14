const analyzer = {

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.split(/\D+/);
    const longNum = number.filter(part => part.trim() !== '');
    const palabras = text.split(/[.,#!$%^&*;:{}=\-_`~()'"¿?¡¡\s]/g);
    const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== '');


    return parseInt(palabrasFiltradas.length-longNum.length);
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoLimpio = text.replace(/[.,#!$%^&*;:{}=\-_`~()'"¿?¡¡\s]/g, '');

    return textoLimpio.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Dividir el texto en palabras
    const palabras = text.split(/\s+/);
    // Calcular la longitud total de todas las palabras: 
    let longitudTotal = 0;
    for (let i = 0; i < palabras.length; i++) {
      longitudTotal += palabras[i].length;
    }
    // Calcular la longitud media
    const longitudMedia = longitudTotal / palabras.length;
    const redondeo = parseFloat(longitudMedia.toFixed(2));
    return redondeo;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // Obtener todos los números del texto en un array
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);
    const resultado = numerosEncontrados !== null ? numerosEncontrados.length : 0;

    return resultado;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    ///\d+/g
    const soloNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (soloNumeros) {
      for (const num of soloNumeros) {
        sum =sum+ parseFloat(num);
      }
    }
    return sum;
  },

};
export default analyzer;
