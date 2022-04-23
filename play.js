// const net = require("net");
const connect = require('./client');

const conn = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  // console.log("data: ", data);
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w" || data === '\u001B\u005B\u0041') {
    conn.write("Move: up");
  } else if (data === "s" || data === '\u001B\u005B\u0042') {
    conn.write("Move: down");
  } else if (data === "a" || data === '\u001B\u005B\u0044') {
    conn.write("Move: left");
  } else if (data === "d" || data === '\u001B\u005B\u0043') {
    conn.write("Move: right");
  }
  
};

console.log("Connecting ...");
setupInput();