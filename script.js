const symbols = ['🍇','🎀','🧁','🍧','🍨','🍵','🧊','🍓']
const playButton = document.getElementById('playButton');
const resultDisplay = document.getElementById('result')
playButton.addEventListener('click', () => {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol3 = symbols[Math.floor(Math.random() * symbols.length)];
     

    reel1.textContent = randomSymbol1;
    reel2.textContent = randomSymbol2;
    reel3.textContent = randomSymbol3;
    if (randomSymbol1 === randomSymbol2 && randomSymbol2 === randomSymbol3) {
        resultDisplay.textContent = 'вы выиграли!'
    } else {
        resultDisplay.textContent = 'Попробуйте снова!';
    }
    

});