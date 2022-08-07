/**
 * Lets create Server
 */
const http = require("http");
const PORT = 3000;

/**
 *  Create server.
 */
const nodeServer = http.createServer((req, res) => {
    if (req) {
        console.log('Request made');
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