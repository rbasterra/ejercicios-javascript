// Crea una función que tome como parámetro un array. Si todos los elementos delarray son estrictamente iguales, muestra por consola true, de lo contrario muestrafalse. 
// Por ejemplo:
// ([true, true, true, true]) => output: true
// (['10',10,10,10]) => output: false

function isEqual (array){
    for (let i=0; i < array.length; i++){
        for (let j=i; j < array.length; j++){
            if (array[i] !== array[j]){
                return false;
            }
        }
    }
    return true;
}

console.log (isEqual(['10','10','10','10']))