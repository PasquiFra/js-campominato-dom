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
/*
const selectAll = (array, maxNum, cell) => {
    
    for (cell of cells){
        cell.classList.add("clicked");
        if (array.includes(i)){
            cell.classList.add("bomb");
        }
    }
}
*/

const endGame = (score, hasWon = false ) => {
    
    const message = hasWon 
    ? "hai vinto" 
    : `hai perso! hai totalizzato ${score} punti"`
    
    cell.classList.add("bomb");

    // selectAll(array, maxNum, cell)
    

}
