function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function setBackground(){

    let element = document.querySelectorAll("p");

    for (let i=0; i < element.length; i++){
        element[i].style.color= generateRandomColor();
    }
}