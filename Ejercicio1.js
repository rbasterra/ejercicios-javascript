// Crea una función que tome como parámetro un número. Si es un número entero (sindecimales) muestra por consola true. Si no, muestra por consola false.

function checkNumber(num){

    return Number(num) && num%1===0 ? true : false;
}

console.log(checkNumber(10.5));