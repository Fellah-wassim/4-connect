import ConnectFourBoard
import random

class Play:
  def __init__(self):
    self.turn = 2

  def humanTurn(self, column, board):
    possibleMoves = board.getPossibleMoves()
    matchingMoves = [move for move in possibleMoves if move[1] == column]

    if matchingMoves:
      selectedMove = matchingMoves[0]
      board.makeMove(selectedMove[1], selectedMove[0], 1)
      self.turn = 2
      return selectedMove
    

  def minimaxAlphaBetaPruning(self, board, depth, alpha, beta, maximizingPlayer):
    if depth == 0 or board.gameOver() != -1:
      if self.turn == 2:
        return board.heuristicEval(2) - board.heuristicEval(1)
      else:
        return board.heuristicEval2(2) - board.heuristicEval2(1)

    possibleMoves = board.getPossibleMoves()

    if maximizingPlayer:
      maxEval = float('-inf')
      for move in possibleMoves:
        row, col = move
        board.makeMove(col, row, 2)
        eval = self.minimaxAlphaBetaPruning(board, depth - 1, alpha, beta, False)
        board.board[row][col] = 0
        maxEval = max(maxEval, eval)
        alpha = max(alpha, eval)
        if beta <= alpha:
          break
      return maxEval
    else:
      minEval = float('inf')
      for move in possibleMoves:
        row, col = move
        board.makeMove(col, row, 1)
        eval = self.minimaxAlphaBetaPruning(board, depth - 1, alpha, beta, True)
        board.board[row][col] = 0
        minEval = min(minEval, eval)
        beta = min(beta, eval)
        if beta <= alpha:
          break 
      return minEval

  def computerTurn(self, board):
    possibleMoves = board.getPossibleMoves()
    bestMove = None
    bestValue = float('-inf')

    for move in possibleMoves:
      row, col = move
      board.makeMove(col, row, 2)
      moveValue = self.minimaxAlphaBetaPruning(board, 3, float('-inf'), float('inf'), False)
      board.board[row][col] = 0

      if moveValue > bestValue:
        bestValue = moveValue
        bestMove = move

    board.makeMove(bestMove[1], bestMove[0], 2)
    self.turn = 1
    return bestMove
  
  def computer2Turn(self, board):
      possibleMoves = board.getPossibleMoves()
      bestMove = None
      bestValue = float('inf')  # Initialize to positive infinity for minimizing player

      for move in possibleMoves:
          row, col = move
          board.makeMove(col, row, 1)  # Make move for player 1 (minimizing player)
          moveValue = self.minimaxAlphaBetaPruning(board, 3, float('-inf'), float('inf'), False)
          board.board[row][col] = 0  # Undo the move

          if moveValue < bestValue:
              bestValue = moveValue
              bestMove = move

      board.makeMove(bestMove[1], bestMove[0], 1)  # Make the best move for player 1
      self.turn = 2
      return bestMove