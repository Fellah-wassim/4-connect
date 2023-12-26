class ConnectFourBoard:
  def __init__(self):
    self.board = [[0 for i in range(7)] for j in range(6)]

  def reset(self):
    self.board = [[0 for i in range(7)] for j in range(6)]
    
  def drawBoard(self):
    for i in range(6):
      for j in range(7):
        print(self.board[i][j], end=" ")
      print()
    print()


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
        window = [self.board[i][j+k] for k in range(4)]
        score += window.count(piece) ** 2
        score -= window.count(opponent_piece) ** 2

    for i in range(3):
      for j in range(7):
        window = [self.board[i+k][j] for k in range(4)]
        score += window.count(piece) ** 2
        score -= window.count(opponent_piece) ** 2

    for i in range(3):
      for j in range(4):
        window = [self.board[i+k][j+k] for k in range(4)]
        score += window.count(piece) ** 2
        score -= window.count(opponent_piece) ** 2

    for i in range(3, 6):
      for j in range(4):
        window = [self.board[i-k][j+k] for k in range(4)]
        score += window.count(piece) ** 2
        score -= window.count(opponent_piece) ** 2

    return score



