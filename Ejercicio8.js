// Crea una función que tome dos arrays de números como parámetros. Une ambos arrays, remueve valores duplicados (si hay alguno) y ordena los números en ordenascendente.



function joinArray(num1, num2){
    let join = [];
  

    for (num of num1.concat(num2)){
        if (!join.includes(num)){
            join.push(num);
        }
    }

   
    return join.sort((a,b) => a-b);
}

console.log(joinArray([1,4,6,9,20,18], [9,4,47, 7, 3, 6]));