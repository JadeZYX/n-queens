/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({ n: n });
  let matrix = board.rows();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = 1;
      if (board.hasAnyRooksConflicts()) {
        matrix[i][j] = 0;
      } else {
        i++;
      }
    }
  }
  let solution = matrix;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //recursion
  //create variable that keeps count of the possible solutions
  //base case when n is 0 or reached (n pieces is put on, or reached end of chess board)
  //recursive action - run findNRooksSolution(n)
  //recursion - run function again with n-1
  let board = new Board({n:n});
  let solutionCount = 0;
  let helper = function(row){
    if(row === n){
      solutionCount++;
      return;
    }
    for(let column = 0;column<n;column++){
      //put piece
      board.togglePiece(row,column);
      if(!board.hasAnyRooksConflicts()){
        //if the last place is correct, then keep going on
        helper(row+1);
      }
      //if has conflicts, then take off the piece
      board.togglePiece(row,column);
    }
  };
  helper(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  let solution = [];
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
