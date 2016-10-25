/* echo tcp server
1. say hello when a client connects
2. echo back whatever message the client sends
*/
const net = require('net');
const assert = require('chai').assert;
const server = require('../lib/echo-server');

describe('echo server', () => {

    const port = 65000;
    let client = null;

    before(done => {
        server.listen(port, done);
    });

    before(done => {
        client = net.connect({ port: port }, err => {
            if (err) done(err)
            else {
                client.setEncoding = 'utf-8';
                done();
            }
        });
    });

    // before(done => {
    //     server.listen(port, () => {
    //         client = net.connect({ port: port });
    //         client.setEncoding = 'utf-8';
    //         done();
    //     })
    // });

    it('says hello when client connects', done => {
        client.once('data', data => {
            console.log('first listener received', data.toString());
            assert.equal(data, 'hello');
            done();
        });
    });

    it('client message echoed back', done => {
        const message = 'echo me';

        client.once('data', data => {
            console.log('second listener received', data.toString());
            assert.equal(data, message);
            done();
        });

        client.write(message);
    });

    
});