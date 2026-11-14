const http = require("http");

const server = http.createServer((req, res) => {
    // Cek route (URL)
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, dari server node.js!");
    } else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Ini data JSON", status: "success" }));
    }else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Halaman tidak ditemukan");
    }
});

server .listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});