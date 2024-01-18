# Connect4 Game

Connect Four is a classic two-player connection game in which the players first choose a color and then take turns dropping one of their colored discs from the top into a vertically suspended grid. The grid is typically 6 rows by 7 columns. The objective of the game is to connect four of one's own discs of the same color in a row, horizontally, vertically, or diagonally, before the opponent.

![Bot vs Bot](./src/assets/screenshots/mainMenu.jpg)

In this project, you will find a 4-connect game implementation with player vs bot and bot vs bot functionality. The backend is built using Flask, and the frontend is developed using React. The game employs the Minimax algorithm with alpha-beta pruning and incorporates heuristics for optimal decision-making.

## Features

- Player vs Bot gameplay
- Bot vs Bot simulation
- Minimax algorithm with alpha-beta pruning
- Heuristic evaluation for efficient decision-making

<div style="display: flex; justify-content: space-between;">

  <div style="flex: 0 0 48%; text-align: center;">
    <p>Player vs Bot</p>
    <img src="./src/assets/screenshots/playerVsBot.gif" alt="Player vs Bot" width="300"/>
  </div>

  <div style="flex: 0 0 48%; text-align: center;">
    <p>Bot vs Bot</p>
    <img src="./src/assets/screenshots/botVsBot.gif" alt="Bot vs Bot" width="300"/>
  </div>

</div>


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

### Contributing

Feel free to contribute to the project by opening issues or submitting pull requests



