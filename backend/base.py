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
    emit('initial_state', {'board': gameBoard.board})

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('computer1_move')
def handle_computer_move():
    if playInstance.turn == 2 and gameBoard.gameOver() == -1:
        move = playInstance.computerTurn(gameBoard)
        game_over_result = gameBoard.gameOver()
        emit('update_state', {'board': gameBoard.board, 'game_over': game_over_result, 'move': move, 'turn': playInstance.turn}, broadcast=True)
    
@socketio.on('human_move')
def handle_move(data):
 if playInstance.turn == 1 and gameBoard.gameOver() == -1:
        column = data['column']
        move = playInstance.humanTurn(column, gameBoard)
        game_over_result = gameBoard.gameOver()
        emit('update_state', {'board': gameBoard.board, 'game_over': game_over_result, 'move': move, 'turn': playInstance.turn}, broadcast=True)

@socketio.on('reset')
def handle_reset():
    gameBoard.reset()
    playInstance.turn = 2
    emit('initial_state', {'board': gameBoard.board}, broadcast=True)
    
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, debug=True)
