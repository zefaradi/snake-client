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
    // console.log('Server says: ', "you ded cuz you idled")
    console.log('Successfully connected to game server');
    conn.write("Name: ZEF");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },1000)

    // setTimeout(() => {
    //   conn.write("Move: left");
    // },2000)

    // setTimeout(() => {
    //   conn.write("Move: down");
    // },3000)
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000)
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};