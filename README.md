🎮 Mystery Word Guessing Game  
A responsive, interactive web-based word guessing game built using **HTML**, **CSS**, and **JavaScript**.  
This project is an upgraded version of a classic hangman/word-guess-style game and demonstrates DOM manipulation, events, functions, loops, and responsive design.

Hosted on GitHub Pages / Vercel:  
https://webgame-assignment3.vercel.app/

✨ Features

🎯 Core Gameplay
- The player selects a **category** (Animals / Fruits / Colors).
- A random secret word is chosen from that category.
- The player guesses letters using an **on-screen keyboard**.
- The page updates dynamically to show:
  - Correct letters revealed
  - Incorrect guesses
  - Remaining attempts
  - Win/Loss messages

🖥 Dynamic DOM Updates
The game uses JavaScript to update:
- The hidden word display
- Remaining tries counter
- Keyboard state (disabling guessed letters)
- Game messages
- Score history list

No prompts or alerts are used — all interaction happens through the DOM.

🎨 Modern UI & Visual Enhancements
- Fully responsive layout (mobile → desktop)
- Custom Google Fonts
- Animated feedback (bounce on correct, shake on wrong)
- Styled dropdown and buttons with gradients & shadows
- Modern card-style interface

🔁 Replay System
- A "Play Again" button restarts the game.

🧮 Score History
- The game stores:
  - Wins / losses
  - Words guessed
  - Attempts used  
  - Timestamp  
- Data persists using **localStorage**.

📱 Responsive Design
- Adapts to mobile screens (3-row mobile keyboard)
- Works on tablets and desktops
- Touch-friendly large buttons and tap targets

🎮 How to Play

1. Choose a category from the dropdown.
2. Click **Start Game**.
3. Use the on-screen keyboard to guess letters.
4. Correct guesses reveal letters in the mystery word.
5. Wrong guesses reduce the number of tries.
6. Win by finding all letters — lose if tries reach zero.
7. View your score history and click **Play Again** to restart.

🚀 How to Run the Project

Option 1 — Local run
1. Download or clone the repository.
2. Open **index.html** in any browser.

Option 2 — GitHub Pages
1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**
3. Select branch: `main` or `master`
4. Set folder: `/root` (or `/docs`)
5. Save  
