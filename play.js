const connect = require('./client');

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
Snake.conn.on('connect', function() {
  // setInterval(() => {
  //   Snake.moveDown();
  // }, 1000);
});

const setupInput = function () {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on('data', function (key){
    if(key === '\u0003') {
      process.exit()
    }
    
    console.log(key);
  });
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

setupInput();

