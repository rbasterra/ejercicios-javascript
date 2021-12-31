// Crea una función que tome como parámetro un array de strings y muestra por consola el string más largo. 
// Por ejemplo:
// (['help', 'me']) => output: “help”


function longestStr(array){

    let str="";

    for (let i=0; i < array.length; i++){
        if (str.length < array[i].length){
            str = array[i];
        }
    }

    return str;

}

console.log (longestStr(['help', 'me', 'yyou', 'coffee','abracadabra']));