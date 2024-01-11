const analyzer = {

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.split(/\D+/);
    const longNum = number.filter(part => part.trim() !== '');
    const palabras = text.split(/[.,#!$%^&*;:{}=\-_`~()'"¿?¡¡\s]/g);
    //const encuentraNum = /\d/;
    const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== '');


    return palabrasFiltradas.length-longNum.length;


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
    /* const arraytext=text.split(/\s+/);
    let longpalabras;
    let suma=0;
    let contador=0;
    for (let i = 0; i<arraytext.length; i++){
      longpalabras= arraytext[i].length;
      suma=suma+longpalabras;
      if(!arraytext[i]===' '){
        contador++;
      }
    }
    const total = suma/contador;
    return total; */
    const arraytext = text.split(/\s+/);
    let suma = 0;

    for (let i = 0; i < arraytext.length; i++) {
      suma += arraytext[i].length;
    }

    const total = suma / arraytext.length;
    return total || 0;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

    const soloNumeros = text.match(/\d+/g);
    if (soloNumeros) {
      return soloNumeros.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const soloNumeros = text.match(/\d+/g);
    let sum = 0;
    if (soloNumeros) {
      for (const num of soloNumeros) {
        sum =sum+ parseInt(num);
      }
    }
    return sum;
  },

};

export default analyzer;
