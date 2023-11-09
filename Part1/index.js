






///// switching O or X player ////////
let player = 'X'

const play = (evt) => {
    //console.log('Square was clicked');
    let count = 0
    count++
    if (count >= 5) {
        calculateWinner()
    }
    evt.target.innerText  = player

    if (player === 'X') {
        player = 'O'
    } else { 
        player = 'X'
    }
    
    const spanVar = document.querySelector('#current-player')
    spanVar.innerText = player

    const winner = calculateWinner();
  if (winner) {
    alert(`${winner} is the winner!`);
  } else if (isBoardFull()) {
    alert('Game is a tie!');
  }
}





///// Board is Full ////////
function isBoardFull() {
    for (const square of squares) {
      if (square.innerText === '') {
        return false;
      }
    }
    return true;
  }


////// Calculate Winner ////////////
const calculateWinner = () => {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
      ];


  // We want to use a traditional for-loop instead of a .forEach() loop so we can return
  // as soon as a winner is found.
  for (const line of lines) {
    const [a, b, c] = line;
    // Get the text in each square
    const squareAText = squares[a].innerText;
    const squareBText = squares[b].innerText;
    const squareCText = squares[c].innerText;

    // If the first square isn't blank, and it matches the value of the second and third square,
    // then we have a winner.
    if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
      return squareAText;
    }
  }

  // If we've searched all the lines, then the function returns undefined.
  return undefined;
}





///// clicking each square /////////
const squares = document.querySelectorAll('.square')
console.log(squares);

for(let i = 0; i < squares.length; i++) {
    // console.log(themeButtons[i].textContent);
    squares[i].addEventListener('click' , play)
 }






/////// Event listeners /////////

resetButton.addEventListener('dblclick' , reset)



 