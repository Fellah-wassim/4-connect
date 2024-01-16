class ConnectFourBoard:
  def __init__(self):
    self.board = [[0 for i in range(7)] for j in range(6)]

  def reset(self):
    self.board = [[0 for i in range(7)] for j in range(6)]
    
  def getPossibleMoves(self):
    possibleMoves = []
    i = 0
    j = 0
    while j < 7:
      while i < 6 and self.board[i][j] == 0:
        i += 1
      if i != 0:
        possibleMoves.append((i-1, j))
      i = 0
      j += 1
    return possibleMoves

  def makeMove(self, col, row, piece):
    if((row,col) not in self.getPossibleMoves()):
      return False
    self.board[row][col] = piece

  def win(self, piece):
    for i in range(6):
      for j in range(4):
        if self.board[i][j] == piece and self.board[i][j+1] == piece and self.board[i][j+2] == piece and self.board[i][j+3] == piece:
          return True
        
    for i in range(3):
      for j in range(7):
        if self.board[i][j] == piece and self.board[i+1][j] == piece and self.board[i+2][j] == piece and self.board[i+3][j] == piece:
          return True
        
    for i in range(3):
      for j in range(4):
        if self.board[i][j] == piece and self.board[i+1][j+1] == piece and self.board[i+2][j+2] == piece and self.board[i+3][j+3] == piece:
          return True
        
    for i in range(3, 6):
      for j in range(4):
        if self.board[i][j] == piece and self.board[i-1][j+1] == piece and self.board[i-2][j+2] == piece and self.board[i-3][j+3] == piece:
          return True
        
    return False
  

  def gameOver(self): 
    if len(ConnectFourBoard.getPossibleMoves(self)) == 0:
      return 0
    
    if ConnectFourBoard.win(self, 1):
      return 1
    
    elif ConnectFourBoard.win(self, 2):
      return 2
    
    else:
      return -1
  
  def heuristicEval(self, piece):
    opponent_piece = 3 - piece
    score = 0

    for i in range(6):
      for j in range(4):
        window = [self.board[i][j + k] for k in range(4)]
        score += self.evaluateWindow(window, piece, opponent_piece)

    for i in range(3):
      for j in range(7):
        window = [self.board[i + k][j] for k in range(4)]
        score += self.evaluateWindow(window, piece, opponent_piece)

    for i in range(3):
      for j in range(4):
        window = [self.board[i + k][j + k] for k in range(4)]
        score += self.evaluateWindow(window, piece, opponent_piece)

    for i in range(3, 6):
      for j in range(4):
        window = [self.board[i - k][j + k] for k in range(4)]
        score += self.evaluateWindow(window, piece, opponent_piece)

    return score

  def evaluateWindow(self, window, piece, opponent_piece):
    score = 0
    empty_count = window.count(0)
    piece_count = window.count(piece)
    opponent_count = window.count(opponent_piece)

    if piece_count == 4:
      score += 1000
    elif opponent_count == 4:
      score -= 1000
    else:
      score += 10 * piece_count + empty_count
      score -= 10 * opponent_count

    return score

  def heuristicEval2(self, piece):
    opponent_piece = 3 - piece
    score = 0

    for i in range(6):
      for j in range(4):
        window = [self.board[i][j + k] for k in range(4)]
        score += self.evaluateWindow2(window, piece, opponent_piece)

    for i in range(3):
      for j in range(7):
        window = [self.board[i + k][j] for k in range(4)]
        score += self.evaluateWindow2(window, piece, opponent_piece)

    for i in range(3):
      for j in range(4):
        window = [self.board[i + k][j + k] for k in range(4)]
        score += self.evaluateWindow2(window, piece, opponent_piece)

    for i in range(3, 6):
      for j in range(4):
        window = [self.board[i - k][j + k] for k in range(4)]
        score += self.evaluateWindow2(window, piece, opponent_piece)

    score += self.centerControl(piece)
    score += self.controlEdges(piece)
    score += self.controlCorners(piece)
    score -= self.centerControl(opponent_piece)
    score -= self.controlEdges(opponent_piece)
    score -= self.controlCorners(opponent_piece)
    
    return score

  def evaluateWindow2(self, window, piece, opponent_piece):
    score = 0
    empty_count = window.count(0)
    piece_count = window.count(piece)
    opponent_count = window.count(opponent_piece)

    if piece_count == 4:
      score += 1000
    elif opponent_count == 4:
      score -= 1000
    else:
      score += 25 * piece_count + 5 * empty_count
      score -= 20 * opponent_count

    if empty_count == 1:
      if piece_count == 3:
        score += 50
      elif opponent_count == 3:
        score -= 40

    return score

  def centerControl(self, piece):
    # Assign higher scores for pieces in central columns
    center_columns = [2, 3, 4]
    score = 0
    for row in range(6):
      for col in center_columns:
        if self.board[row][col] == piece:
          score += 5
    return score
  
  def controlEdges(self, piece):
    # Assign higher scores for pieces on the edges
    edge_columns = [0, 6]
    score = 0
    for row in range(6):
      for col in edge_columns:
        if self.board[row][col] == piece:
          score += 3
    return score

  def controlCorners(self, piece):
    # Assign higher scores for pieces in the corners
    corner_positions = [(0, 0), (0, 6), (5, 0), (5, 6)]
    score = 0
    for row, col in corner_positions:
      if self.board[row][col] == piece:
        score += 7
    return score
  