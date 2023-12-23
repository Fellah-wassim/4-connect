from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from ConnectFourBoard import ConnectFourBoard
from Play import Play

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

gameBoard = ConnectFourBoard()
playInstance = Play()

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


@socketio.on('human_move')
def handle_human_move(data):
    column = data['column']
    playInstance.humanTurn(column, gameBoard)
    game_over_result = gameBoard.gameOver()
    emit('update_state', {'board': gameBoard.board, 'game_over': game_over_result}, broadcast=True)

@socketio.on('computer_move')
def handle_computer_move():
    playInstance.computerTurn(gameBoard)
    game_over_result = gameBoard.gameOver()
    emit('update_state', {'board': gameBoard.board, 'game_over': game_over_result}, broadcast=True)
    
@socketio.on('move')
def handle_move(data):
    player = data['player']
    column = data['column']

    gameBoard.makeMove(column, gameBoard.getPossibleMoves()[column][0], player)

    # Check if the game is over
    game_over_result = gameBoard.gameOver()

    # Broadcast the updated state and game over result to all connected clients
    emit('update_state', {'board': gameBoard.board, 'game_over': game_over_result}, broadcast=True)

@app.route('/')
def index():
    return render_template('index.html')  # You can create this HTML file later

if __name__ == '__main__':
    socketio.run(app, debug=True)
