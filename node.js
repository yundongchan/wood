var http = require("http");

http.createServer(function (req, res){
	res.write("Hellow node.js ..! \n");
	res.end();
});

console.log("Server running..!! \n"+
	"192.168.188.127:3000");
