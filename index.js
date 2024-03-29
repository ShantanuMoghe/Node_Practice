/**
 * Lets create Server
 * PURELY Node Server
 */
const http = require("http");
const PORT = 3000;

/**
 *  Create server.
 */
const nodeServer = http.createServer((req, res) => {
    if (req) {
        console.log('Request made');
        if(req.url === '/index'){
            console.log('at index')
        }
        res.end(`<html>
            <body>
            <H1>Request is made</H1>
            </body>
        </html>`)
    }
});

/**
 *  Listen server.
 */
nodeServer.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}/`);
})