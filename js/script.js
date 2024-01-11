console.log("script.js OK");

// prelevo elementi del DOM 

const difficultyChoice = document.getElementById("difficulty");
const startButton = document.getElementById("start");
const grid = document.getElementById("grid");
const title = document.getElementById ("begin-title");
const points = document.getElementById ("score"); 

//imposto la variabile per il num di celle per riga/colonna
let cellsNum;

// imposto il numero di bombe da posizionare
const bombsToPlace = 16;

// inserisco i messaggi di fine gioco 
const loseMessage = "Hai pestato una bomba!";

// imposto il contatore di punteggio
let score = 0;

function startGame () {
    
    //faccio sparire il testo
    title.classList.add = "d-none";
    
    //cliccando di nuovo il bottone svuoto i campi:
    const generatedBombs = [];
    grid.innerText = "";
    cellsNum = "";
    startButton.innerHTML = "Ricomincia";
    
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
    
    const root = document.querySelector (":root");
    root.style.setProperty("--cols-per-row", cellsNum);
    
    
    // definisco la variabile per le rige e per le colonne
    const rows = cellsNum;
    const cols = cellsNum;
    let totalCells = rows * cols;
    
    // imposto il punteggio massimo
    const maxPoints = totalCells - bombsToPlace ;
    console.log("numero celle (riga/colonna)", cellsNum, "totale celle", totalCells);
    
    // Genero la griglia con il numero di celle richieste
    for (let i = 1 ; i <= totalCells ; i++) {
        
        //inserisco la funzione che genera una singola griglia
        const cell = generateGrid(i);
        
        //inserisco la funzione di generazione delle bombe
        generateBomb (totalCells, bombsToPlace, generatedBombs);
        
        //inserisco l'event listener che mi permette di applicare uno sfondo quando clicco
        cell.addEventListener("click", function() {

            if (cell.classList.contains("clicked")) return;
            
            cell.classList.add("clicked");
            console.log("i: ", i);

            // controllo se ho cliccato una bomba
            const HitBomb = generatedBombs.includes(i);

            if (HitBomb) {
                console.log(loseMessage);
                cell.classList.add("bomb");
                endGame(score, false);
            } else {
                score += 1;
                points.innerText = score;

                if (score === maxPoints) {
                    endGame(score, true)
                }
            }

        })
        
        
        // inserisco la singola griglia nel documento
        grid.appendChild(cell);
    }
    
    console.log("generated bombs: ", generatedBombs);
}

startButton.addEventListener ("click", startGame);

