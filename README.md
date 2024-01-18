# Connect4 Game

Connect Four is a classic two-player connection game in which the players first choose a color and then take turns dropping one of their colored discs from the top into a vertically suspended grid. The grid is typically 6 rows by 7 columns. The objective of the game is to connect four of one's own discs of the same color in a row, horizontally, vertically, or diagonally, before the opponent.

![Bot vs Bot](./src/assets/screenshots/mainMenu.jpg)

In this project, you will find a 4-connect game implementation with player vs bot and bot vs bot functionality. The backend is built using Flask, and the frontend is developed using React. The game employs the Minimax algorithm with alpha-beta pruning and incorporates heuristics for optimal decision-making.

## Features

- Player vs Bot gameplay
- Bot vs Bot simulation
- Minimax algorithm with alpha-beta pruning
- Heuristic evaluation for efficient decision-making

## User Interface


### Main Menu
<img src="./src/assets/screenshots/mainMenu.jpg" alt="Main Menu" width="600"/>

### Game Rules
<img src="./src/assets/screenshots/gameRules.jpg" alt="Game Rules" width="600"/>

### Menu Popup
<img src="./src/assets/screenshots/menuPopup.jpg" alt="Menu Popup" width="600"/>

### Game Over Popup
<img src="./src/assets/screenshots/gameOverPopup.jpg" alt="Game Over Popup" width="600"/>

# Player vs Bot
<img src="./src/assets/screenshots/payerVsBot.gif" alt="Player vs Bot" width="600"/>

# Bot vs Bot
<img src="./src/assets/screenshots/botVsBot.gif" alt="Bot vs Bot" width="600"/>


## How to Run

### Backend (Flask)

1. Navigate to the `backend` directory.
   
   ```bash
   cd backend
   ```
   
3. Install the requirements.
   
   ```bash
   pip install -r requirements.txt
   ```
   
4. Run the Flask application.
   
   ```bash
   flask run
   ```

   
### Frontend (React)

1. Navigate to the `frontend` directory (the root directory).
   
2. Install the dependencies.
   ```bash
   npm install
   ```
   
3. Run the `frontend`.
   ```bash
   npm run dev
   ```


## Contributing

Contributions are always welcome! If you find a bug or have a feature request, please open an issue. If you want to contribute code, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Submit a pull request


## Tools Used

This project was created using the following tools:

- <img src="https://img.shields.io/badge/library-React-blue?style=flat-square&logo=react" alt="React" /> React
- <img src="https://img.shields.io/badge/code-JavaScript-blue?style=flat-square&logo=javascript" alt="JavaScript" /> JavaScript
- <img src="https://img.shields.io/badge/framework-Tailwind_CSS-blue?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" /> Tailwind CSS
- <img src="https://img.shields.io/badge/package-npm-blue?style=flat-square&logo=npm" alt="npm" /> npm
- <img src="https://img.shields.io/badge/linter-ESLint-blue?style=flat-square&logo=eslint" alt="ESLint" /> ESLint
- <img src="https://img.shields.io/badge/git-Git-blue?style=flat-square&logo=git" alt="Git" /> Git
- <img src="https://img.shields.io/badge/code%20formatter-Prettier-blue?style=flat-square&logo=prettier" alt="Prettier" /> Prettier
- <img src="https://img.shields.io/badge/code-VSCode-blue?style=flat-square&logo=visual-studio-code" alt="VS Code" /> Visual Studio Code
- <img src="https://img.shields.io/badge/code-VSCode-blue?style=flat-square&logo=python" alt="Python" /> Python
- <img src="https://img.shields.io/badge/code-VSCode-blue?style=flat-square&logo=flask" alt="flask" /> Flask
- <img src="https://img.shields.io/badge/code-VSCode-blue?style=flat-square&logo=socket" alt="socket" /> Socket

---

<p align="center">
  Made with ❤️ by Fellah Wassim
</p>
