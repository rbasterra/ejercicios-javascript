// Crea una función que tome un objeto como parámetro. Remueve la propiedad “country” y su valor y muestra el resultado por consola. 
// Por ejemplo:
// const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'NorthAmerica' }=> output: { city: 'Sacramento', state: 'California', continent: 'North America' }

const myObj = { 
    city: 'Sacramento', 
    state: 'California', 
    country: 'USA', 
    continent: 'NorthAmerica' };


function removeCtry(obj){
    delete obj.country;
}

removeCtry(myObj);

console.log (myObj);


