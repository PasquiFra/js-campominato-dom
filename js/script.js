console.log("JS OK");

// prelevo elementi del DOM 

const difficultyChoice = document.getElementById("difficulty");
const startButton = document.getElementById("start");
const grid = document.getElementById("grid");
const title = document.getElementById ("begin-title");

//imposto la variabile per il num di celle per riga/colonna
let cellsNum;
let cellSize;

startButton.addEventListener ("click", function() {
    
    //faccio sparire il testo
    title.classList.add = "d-none";

    //se avevo già cliccato il bottone svuoto il contenuto precedentemente inserito
    grid.innerHTML = "";
    cellsNum = "";
    startButton.innerHTML = "Ricomincia"
    
    console.log("cliccato");
    
    //controllo la difficoltà selezionata
    const difficulty = difficultyChoice.value;
    
    if (difficulty === "easy") {
        cellsNum = 7;
        cellSize = " " + difficulty;
    } else if (difficulty === "medium") {
        cellsNum = 9;
        cellSize = ` ${difficulty}`;
    } else {
        cellsNum = 10;
        cellSize = ` ${difficulty}`;
    }
    
    const root = document.querySelector (":root");
    root.style.setProperty("--cols-per-row", cellsNum);


    // definisco la variabile per le rige e per le colonne
    const rows = cellsNum;
    const cols = cellsNum;
    const totalCells = rows * cols;

    console.log("numero celle (riga/colonna)", cellsNum, "totale celle", totalCells);
    
    // Genero la griglia con il numero di celle richieste
    for (let i = 1 ; i <= totalCells ; i++) {
        
        //inserisco la funzione che genera una singola griglia
        const cell = generateGrid(i);
        
        //inserisco l'event listener che mi permette di applicare uno sfondo quando clicco
        cell.addEventListener("click", function() {

            if (cell.classList.contains("clicked")) return;

            cell.classList.toggle("clicked");
            console.log("cell.innerText :", cell.innerText)
            console.log("i: ", i)

        })
        
        
        // inserisco la singola griglia nel documento
        grid.appendChild(cell);
    }
    
})
