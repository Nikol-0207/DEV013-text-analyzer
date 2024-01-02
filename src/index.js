import analyzer from './analyzer.js';
const textarea = document.getElementById('textoarea');
    const words = document.getElementById('numbers');
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
function limpiar(){
   let limpia = document.getElementById('textoarea');
   limpia.value ='';   
}
function lecturaDdatos(){
   analyzer.getWordCount();

}


   
   