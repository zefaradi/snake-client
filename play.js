// Exporting the connect and setupInput functions to connect to the game server and to handle user inputs

const { connect } = require("./client");
const { setupInput } = require("./input");

// Declaring the connection to be used in the input.js file
let connection;

console.log("Connecting ...");

connection = connect();

// calling the setupInput function for handeling user inputs, to call the connect function and to write messages on the user console.
setupInput(connection);