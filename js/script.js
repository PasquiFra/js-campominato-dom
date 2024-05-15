console.log("script.js OK");

// prelevo elementi del DOM 

const difficultyChoice = document.getElementById("difficulty");
const startButton = document.getElementById("start");
const grid = document.getElementById("grid");
const title = document.getElementById("begin-title");
const points = document.getElementById("score");

//imposto la variabile per il num di celle per riga/colonna
let cellsNum;

// imposto il numero di bombe da posizionare
const bombsToPlace = 16;

// imposto il contatore di punteggio
let score = 0;


function startGame() {

    //azzero lo score
    score = 0

    //faccio sparire il testo
    title.classList.add = "d-none";

    //cliccando di nuovo il bottone svuoto i campi:
    const generatedBombs = []; //array contenente le bombe precedentemente create (da ricreare quindi)
    grid.innerText = ""; // la griglia
    cellsNum = ""; //numero di celle per riga/colonna in base alla difficoltà
    startButton.innerHTML = "Ricomincia"; //il bottone cambia scritta
    points.innerText = 0; // azzeramento score 

    console.log("cliccato");

    //controllo la difficoltà selezionata
    const difficulty = difficultyChoice.value;

    if (difficulty === "easy") {
        cellsNum = 7;
    } else if (difficulty === "medium") {
        cellsNum = 9;
    } else {
        cellsNum = 10;
    }

    const root = document.querySelector(":root");
    root.style.setProperty("--cols-per-row", cellsNum);


    // definisco la variabile per le rige e per le colonne
    const rows = cellsNum;
    const cols = cellsNum;
    let totalCells = rows * cols;

    //inserisco la funzione di generazione delle bombe
    generateBomb(totalCells, bombsToPlace, generatedBombs);

    // imposto il punteggio massimo
    const maxPoints = totalCells - bombsToPlace;

    console.log("numero celle (riga/colonna)", cellsNum, "totale celle", totalCells, "punteggio massimo", maxPoints);

    // Genero la griglia con il numero di celle richieste
    for (let i = 1; i <= totalCells; i++) {

        //inserisco la funzione che genera una singola griglia
        const cell = generateGrid(i);


        //inserisco l'event listener che mi permette di applicare uno sfondo quando clicco
        cell.addEventListener("click", function () {

            if (cell.classList.contains("clicked")) return;

            cell.classList.add("clicked");
            console.log("i: ", i);

            // controllo se ho cliccato una bomba
            const hitBomb = generatedBombs.includes(i);

            if (hitBomb) {
                cell.classList.add("bomb");
                endGame(score, false, cell, generatedBombs);
            } else {
                points.innerText = ++score;

                if (score === maxPoints) {
                    endGame(score, true, cell, generatedBombs)
                }
            }

        })


        // inserisco la singola griglia nel documento
        grid.appendChild(cell);
    }

    console.log("generated bombs: ", generatedBombs);
}

startButton.addEventListener("click", startGame);

