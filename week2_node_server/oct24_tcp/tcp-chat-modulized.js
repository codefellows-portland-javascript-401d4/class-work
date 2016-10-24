const net = require('net');

let i = 1;
const clients = [];

// what are the requirements for our chat server?
// 1. add clients and announce
// 2. broadcast messages
// 3. track clients leaving and announce

class ChatRoom {
    constructor() {
        this.clients = [];
    }

    add(client) {
        this.clients.push(client);
    }
}

const chatRoom = new ChatRoom();

const server = net.createServer(client => {
    const name = 'client ' + (i++);
    client.setEncoding('utf-8');

    clients.push(client);

    client.on('data', message => {
        //send this to all the other clients
        clients.forEach(c => {
            // if same as sender, return (exit this particular forEach invocation)
            if(c === client) return;
            // otherwise send the message
            c.write(`${name}: ${message}`);
        });
    });

    client.on('close', () => {
        // remove from array:
        const index = clients.indexOf(client);
        if (index !== -1) clients.splice(index, 1);
        console.log(`client ${name} has disconnected`);
    });
});

const port = 65000;
server.listen(port, err => {
    if (err) console.log('ERROR!', err);
    else console.log('server listening on port', port);
})