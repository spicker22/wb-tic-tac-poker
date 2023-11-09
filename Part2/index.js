








const idInput = document.querySelectorAll('#idInput');
const colorInput = document.querySelectorAll('#colorInput');
console.log(idInput);
console.log(colorInput);


//// Target Cards /////

const setCards = () => {
    const card = document.querySelector( `#${idInput.value}`)
    card.style.color = colorInput.value;
    console.log(card); 
}

document.querySelector('#editCardButton').addEventListener('click',setCards)




