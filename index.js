const express = require('express');
const app     = express(); //app is an object with a bunch of methods to build a server


app.get('/', (req, res) => {
	res.send('Hi Im the info the server has sent to the client');
})

app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/request', (req, res) =>{
	console.log(req);
	res.send('blah');
})


app.listen(4000, () => {
	console.log('I am lsitening on port 4000')
})