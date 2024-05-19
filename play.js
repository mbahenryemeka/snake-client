const connect = require('./client');
const setupInput = require('./input');

// establishes a connection with the game server


const Snake = {
  conn: connect(),
  moveUp: () => {
    Snake.conn.write("Move: up");
  },

  moveDown: () => {
    Snake.conn.write("Move: down");
  },

  moveLeft: () => {
    Snake.conn.write("Move: left");
  },

  moveRight: () => {
    Snake.conn.write("Move: right");
  }
};

console.log("Connecting ...");
//Snake.conn.on('connect', function() {
  // setInterval(() => {
  //   Snake.moveDown();
  // }, 1000);
//});
connect();
setupInput();

