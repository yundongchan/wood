var http = require("http");

http.createServer(function (req, res){
	res.write("Hellow node.js ..! \n");
	res.end();
}).listen(3000, "192.168.188.127");

console.log("Server running..!! \n"+
	"192.168.188.127:3000");
