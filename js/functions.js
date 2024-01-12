console.log("functions.js OK");

const generateGrid = (content) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = content;
    return cell;
}

const generateBomb = (maxNum, totalNums , array) => {

    //genero un numero da 1 a totalCells
    
    while (array.length < totalNums) {
        let number = Math.floor(Math.random() * maxNum) + 1;
        if (!array.includes(number)) array.push(number)
    };
}

// Funzione per rivelare le celle 

const revealAll = (cell, array) => {
    const cells = document.querySelectorAll(".cell");
    for (cell of cells) {
        cell.classList.add("clicked");
        if (array.includes(parseInt(cell.innerText))) {
            cell.classList.add("bomb");
        }
    }
}

const endGame = (score, hasWon = false, cell, array) => {
    
    const message = hasWon ? `Hai vinto totalizzando il punteggio massimo di ${score}` : `hai perso! hai totalizzato ${score} punti"`
    
    revealAll(cell, array);

    alert (message);
}
