var http = require("http");

var fs1 = require("fs");
//create a server object:
http
  .createServer(function(req, res) {
    fs1.readFile("src/hello.html", (e, data) => {
      if (e) throw e;
      res.write(data);
      res.end();
    }); //
  })
  .listen(8080); //the server object listens on port 8080
