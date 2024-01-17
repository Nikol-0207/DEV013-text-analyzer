# Analizador de Texto

Este proyecto con funciones de JavaScript es para analizar un texto y devolver datos númericos de funciones. Dichas funciones son contar palabras, contar caracteres, contar caracteres excluyendo signos de puntuación y espacios, la longitud media de las palabras, cuenta los números que hay y suma estos números presentes del texto escrito.
**Contenido del Proyecto**
* [1. Funciones del Analizador](#1-funciones-del-analizador)
* [2. Diseño del analizador de texto](#2-diseño-del-analizador-de-texto)

-------
## 1. Funciones del Analizador
-------
**La aplicación permitira escribir en un cuadro de texto al usuario para calcular este texto**

[![texto.png](https://i.postimg.cc/3x5CV4F4/texto.png)](https://postimg.cc/rKjrtpbM)

**Contador de Palabras :**  Este método me retorna el número de palabras de un texto, esta palabra no debe estar mezclada con números, caracteres especiales por que sino no los considera como uno.

     getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.split(/\D+/);
    const longNum = number.filter(part => part.trim() !== '');
    const palabras = text.split(/[.,#!$%^&*;:{}=\-_`~()'"¿?¡¡\s]/g);
    const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== '');

    return parseInt(palabrasFiltradas.length-longNum.length);
    },

**Recuento de Caracteres:** es el total de caracteres de dicho texto, contando espacios y cualquier caracter especial.

    getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
     },

**Número de Caracteres sin espacios y signos de puntuación:** al igual que el anterior cuenta el número total de caracteres excluyendo espacios y signos de puntuación.

    getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoLimpio = text.replace(/[.,#!$%^&*;:{}=\-_`~()'"¿?¡¡\s]/g, '');
    return textoLimpio.length;
    },

**Calcular la longitud media de palabras:** retorna longitud media de palabras del texto, esto se logra sumando todas las longitudes de las palabras y dividirlo con el número total de palabras.

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

**Contador de números:** este método retornar cuantos números enteros o decimales se encuentren en el texto "Hola 12 1" resultado 2.

    getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // Obtener todos los números del texto en un array
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);

    let resultado = numerosEncontrados !== null ? numerosEncontrados.length : 0;
    if (numerosEncontrados!== null){
      resultado = numerosEncontrados.length;
    }else{
      resultado=0;
    }
    return resultado;
    },

**Suma de números:** este método retorna la suma de números enteros o decimales que se encuentren en dicho texto. ejemplo: "Hola 12 1" resultado 13.

    getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const soloNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (soloNumeros) {
      for (const num of soloNumeros) {
        sum =sum+ parseFloat(num);
      }
    }
    return sum;
    },

## 2. Diseño del analizador de texto
Diseño inicial de como el lugar del titulo, cuadro de texo, boton y contadores

[![primer-boceto.png](https://i.postimg.cc/Pxzgcpcd/primer-boceto.png)](https://postimg.cc/PpJVvxT7)

*Prototipo final*
[![dise-o-final.png](https://i.postimg.cc/0yS94YFg/dise-o-final.png)](https://postimg.cc/tsX0Zx9D)




