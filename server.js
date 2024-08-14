import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
const clients = new Set();

// Establishes a connection
wss.on('connection', (ws) => {
    ws.on('error', console.error)
    clients.add(ws)
    console.log(clients)
    // Listen for a message
    ws.on('message', (message) => {
        console.log(JSON.parse(message))
        for(let client of clients){
            if(client != ws){
              client.send(message.toString());
            }
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws)
      });
})