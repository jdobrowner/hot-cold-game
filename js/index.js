require('babel-polyfill');

// actions

// generate random number
const GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandom = function() {
  var num = Math.ceil( Math.random() * 100 );
  return {
    type: GENERATE_RANDOM_NUMBER,
    number: num
  };
};

// submit guess
const SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(num) {
  return {
    type: SUBMIT_GUESS,
    number: num
  };
};

// alert if guess is out of bounds
const OUT_OF_BOUNDS = 'OUT_OF_BOUNDS';
var outOfBounds = function() {
  return {
    type: OUT_OF_BOUNDS
  };
};

// update hot or cold text
const HOT_OR_COLD = 'HOT_OR_COLD';
var outOfBounds = function() {
  return {
    type: HOT_OR_COLD
  };
};

// add last guess in little box
const LAST_GUESS = 'LAST_GUESS';
var outOfBounds = function(num) {
  return {
    type: LAST_GUESS,
    number: num
  };
};

// update guess number
const UPDATE_GUESS_NUMBER = 'UPDATE_GUESS_NUMBER';
var outOfBounds = function() {
  return {
    type: UPDATE_GUESS_NUMBER
  };
};

// remove submit button and update text div upon win
const REMOVE_SUBMIT = 'REMOVE_SUBMIT';
var outOfBounds = function() {
  return {
    type: REMOVE_SUBMIT
  };
};

// start a new game
const START_GAME = 'START_GAME';
var outOfBounds = function() {
  return {
    type: START_GAME,
  };
};
