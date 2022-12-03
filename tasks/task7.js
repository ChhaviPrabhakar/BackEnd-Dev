const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if(url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>');
        res.write('</html>');
        res.end();
    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my NodeJs Project!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);