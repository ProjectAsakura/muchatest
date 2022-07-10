const net = require('net');
const port = 9002;

const srv = net.createServer((c) => {
    console.log(`connection established`);
    c.on('data', (d) => {
        console.log(`DATA: ${d.toString('hex')} | ${d.toString('ascii')}`);
    });
    c.on('close', () => {
        console.log('closed');
    })
});

srv.listen(port, () => {
    console.log('server ok');
});
