const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our website");
  }
  if (req.url === "/about") {
    res.end(`Here's smth ABOUT us`);
  } else {
    res.end(`
   <h1>Oo-ahhh!</h1>
   <p>We could not find that page!</p>
   <a href="/">back home</a>`
   );
  }
});

server.listen(5000);
