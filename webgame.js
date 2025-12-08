// Word Lists 
const animals = ["lion","zebra","tiger","panda","monkey","giraffe","elephant"];
const fruits  = ["apple","banana","cherry","grape","mango","orange","peach"];
const colors  = ["red","blue","green","yellow","purple","orange","black"];
const categories = { animals, fruits, colors };

const MAX_TRIES = 10;
let secretWord = "";
let guessedLetters = [];
let remainingTries = MAX_TRIES;

// Elements 
const category = document.getElementById("category");
const wordDisplay = document.getElementById("wordDisplay");
const tries = document.getElementById("tries");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const scoreList = document.getElementById("scoreList");

function startGame() {
    const categoryName = document.getElementById("categorySelect").value;

    secretWord = categories[categoryName][Math.floor(Math.random() * categories[categoryName].length)];
    
    console.log(`Secretword: ${secretWord}`)
    guessedLetters = [];
    remainingTries = MAX_TRIES;

    tries.textContent = remainingTries;
    message.textContent = "";
    restartBtn.style.display = "none";

    categoryName.textContent = `Category: ${categoryName.toUpperCase()}`;
    updateDisplayWord();
    createKeyboard();
}

function updateDisplayWord(animal = "") {
    let display = secretWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_ "))
        .join("");

    wordDisplay.textContent = display;

    if (animal) {
        wordDisplay.classList.add(animal);
        setTimeout(() => wordDisplay.classList.remove(animal), 500);
    }
}

function createKeyboard() {
    keyboard.innerHTML = "";
    "abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
        const key = document.createElement("div");
        key.classList.add("key");
        key.textContent = letter;
        key.addEventListener("click", () => handleGuess(letter, key));
        keyboard.appendChild(key);
    });
}

function handleGuess(letter, key) {
    if (guessedLetters.includes(letter) || remainingTries <= 0) return;

    guessedLetters.push(letter);
    key.classList.add("disabled");

    if (secretWord.includes(letter)) {
        updateDisplayWord("correct-animal");
        checkWin();
    } else {
        remainingTries--;
        tries.textContent = remainingTries;
        updateDisplayWord("wrong-animal");
        checkLose();
    }
}

function checkWin() {
    if (secretWord.split("").every(l => guessedLetters.includes(l))) {
        message.textContent = `🎉 You guessed it! "${secretWord.toUpperCase()}"`;
        saveScore(true);
        endGame();
    }
}

function checkLose() {
    if (remainingTries <= 0) {
        message.textContent = `😢 You lost! The word was "${secretWord.toUpperCase()}"`;
        saveScore(false);
        endGame();
    }
}

function endGame() {
    document.querySelectorAll(".key").forEach(k => k.classList.add("disabled"));
    restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", startGame);

// Score History 
function saveScore(win) {
    const scores = JSON.parse(localStorage.getItem("scores") || "[]");
    scores.unshift({
        word: secretWord,
        result: win ? "WIN" : "LOSS",
        tries: MAX_TRIES - remainingTries,
        time: new Date().toLocaleString()
    });
    localStorage.setItem("scores", JSON.stringify(scores));
    renderScores();
}

function renderScores() {
    const scores = JSON.parse(localStorage.getItem("scores") || "[]");
    scoreList.innerHTML = "";
    scores.slice(0, 10).forEach(s => {
        const div = document.createElement("div");
        div.className = "score-entry";
        div.innerHTML = `
            <strong>${s.result}</strong> —
            Word: <b>${s.word.toUpperCase()}</b>,
            Tries: ${s.tries}<br>
            <small>${s.time}</small>
        `;
        scoreList.appendChild(div);
    });
}

renderScores();