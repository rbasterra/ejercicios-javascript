// Crea una función que tome como parámetros un array de objetos y un string. Agrega a cada uno de los objetos la propiedad “continent” que tome como valor el parámetrode string. 
// Muestra por consola el nuevo array.
// ([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')=> 
// output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country:'Thailand', continent: 'Asia' }]

// ([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// => output: [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country:'France', continent: 'Europe' }]

function addContinent(array, continent){

    array.forEach(element => element.continent=continent);
    
    return array;
}



console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));

console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
