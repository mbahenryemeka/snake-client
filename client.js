const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',()=> {
    console.log(`connected to the server`);
    conn.write('Name: HEM');
  })

  conn.on('close', (info) => {
    console.log(`disconnected from the server`);
    console.log(info);
  })

  conn.on('data',(data) => {
    console.log(`from the server: ${data}`);
  })

  return conn;
};


/**
 * "Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right"
 */

module.exports= connect;