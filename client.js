// Code to connect with the game server
const net = require("net");

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on('connect', () => {
    // code that does something when the connection is first established

    console.log('Successfully connected to game server');
    conn.write("Name: ZEF");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};