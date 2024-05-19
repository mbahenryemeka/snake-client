const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',()=> {
    /*setTimeout(() => {
      conn.write('Move: up');
      setTimeout(() => {
        conn.write('Move: left');
        setTimeout(() => {
          conn.write('Move: down');
        },4000)
      },4000)
    },2000)*/
    
    console.log(`connected to the server`);
    conn.write('Name: HEM');
    
  })

  //conn.on('close', (info) => {
    //console.log(`disconnected from the server`);
   // console.log(info);
  //})

  conn.on('data',(data) => {
    console.log(`from the server: ${data}`);
  })

  return conn;
};

module.exports= connect;