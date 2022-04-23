const connect = require('./client');

let connection;

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
  // console.log("data: ", data);
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w" || data === '\u001B\u005B\u0041') {
    connection.write("Move: up");
  } else if (data === "s" || data === '\u001B\u005B\u0042') {
    connection.write("Move: down");
  } else if (data === "a" || data === '\u001B\u005B\u0044') {
    connection.write("Move: left");
  } else if (data === "d" || data === '\u001B\u005B\u0043') {
    connection.write("Move: right");
  } else if (data === "p" ) {
    connection.write("Say: Hurray!");
  }
  
};

module.exports = {setupInput, handleUserInput};
