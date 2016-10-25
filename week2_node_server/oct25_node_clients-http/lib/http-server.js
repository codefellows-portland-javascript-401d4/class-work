const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');


module.exports = http.createServer((req, res) => {
    const url = parseUrl(req.url);
    if( url.pathname === '/favicon.ico') {
        res.setHeader('Content-Type', 'image/x-icon');
        res.statusCode = 200;
        const favicon = fs.createReadStream('favicon.ico');
        favicon.pipe(res);
        return;
    }

    console.log('requested resource:', req.method, url.pathname);

    const query = qs.parse(url.query);
    console.log('query as string', url.query);
    console.log('query as object', query, query.foo);
    
    // res.statusCode = 200;
    // res.statusMessage = 'good to go';
    const type = query.format === 'text' ? 'text/plain' : 'application/json';
    res.setHeader('Content-Type', type);
    res.end(JSON.stringify({ name: 'foo' }));
});