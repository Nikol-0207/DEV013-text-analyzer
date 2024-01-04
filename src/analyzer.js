const analyzer = {  

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
      let arreglotext = text.split(/\s+/);
       let contador=0;
       for (var i = 0; i < arreglotext.length; i++) {
          contador++;
       }
     return contador;
  },
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
      return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const nuevotext = text.replace(/[^\w\s]|_/g,"");
    let contador = 0;
    for (var i = 0; i < nuevotext.length; i++) {
      if (!nuevotext[i] == ' '){
         contador++; 
      }
    } 
    return contador;
    
    /*for (var i = 0; i < text.length; i++ ){
       if (text[i] =' ') || (text[i] = '¿') || (text[i] ='?'){
       }
    } */

  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  
};

export default analyzer;
