const http = require('http');

const server = http.createServer( function(req, resp) {

   const categoria = req.url;

   if(categoria === '/cocaine') {
    resp.end("<html><body>Hello Junkie</body></html>");
   } else if (categoria === '/hemp') {
    resp.end("<html><body>Hello Mocorongs</body></html>");
   }

})


server.listen(3000);
