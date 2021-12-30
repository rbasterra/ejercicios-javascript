// Crea una función que tome como parámetro un número y lo divida en dígitos individuales dentro de un array. 
// Tip: puedes usar el método split(); Por ejemplo:(10) => output: [1,0]

function splitNum (num){
    return Array.from(String(num),Number);
}

console.log(splitNum(112435352));