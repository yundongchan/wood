const express = require("express");

const app = express();

app.get('/', (req, res) => {
	res.send("Here is root..!");
});
app.get("/login", (req, res) =>{
	res.send("Here is login..!");
});

app.listen(3000, ()=>{
	console.log("Server running..!");
});
