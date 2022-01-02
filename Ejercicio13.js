window.onload = () => {

    const dogs = [{name: "balto", type: "chihuahua"},
    {name: "loli", type: "puddle"}];


    let newElem;

    dogs.forEach(dog => {
        
        newElem =document.createElement("h1");
        newElem.innerText = `${dog.name} es un ${dog.type}`;

        

        document.body.appendChild(newElem);
        
    })


}