// Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. 
// Si a contiene b, añade b al principio de a. Si no, añade b al final. 
// Por ejemplo:
// (“cheese”, “cake”) => output: “cheesecake”
// (“Java”, “script”) => output: “JavaScript”
// (“therefore I am”, “I think”) => output: “I think, therefore I am”

function addString (a,b){

    return a.includes(b) ? b + a[0] : a[0] + a[1];
}

console.log (addString(['cheese','cake'], 'cheese'));