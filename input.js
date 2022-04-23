
// constants
const {
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  messages,
} = require("./constants");


// Stores connection object.
let connection;

//// Function to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w" || data === '\u001B\u005B\u0041') {
    connection.write(MOVE_UP);
  } else if (data === "s" || data === '\u001B\u005B\u0042') {
    connection.write(MOVE_DOWN);
  } else if (data === "a" || data === '\u001B\u005B\u0044') {
    connection.write(MOVE_LEFT);
  } else if (data === "d" || data === '\u001B\u005B\u0043') {
    connection.write(MOVE_RIGHT);
  } else if (messages[data]) {
    connection.write(`Say: ${messages[data]}`);
  }
  
};

module.exports = {setupInput, handleUserInput};
