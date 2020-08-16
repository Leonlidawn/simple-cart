const express = require('express');
const minimist = require('minimist');
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    next();
});

//create new order
app.post('/orders', (req, res) => {
	//make sure folder exist
	const orderStoragePath = './orders';
	if (!fs.existsSync(orderStoragePath)){
		fs.mkdirSync(orderStoragePath);
	}

	generateOrderFilePath = () => `${orderStoragePath}/order_${uuid.v4()}.json`;
	let path = generateOrderFilePath();

	//check if file already exist, generate again if it does.
	while(fs.existsSync(path)){
		path = generateOrderFilePath();
	}
	const content =  JSON.stringify(req.body);
	fs.writeFile(path,content,(err)=>{
		if(err) return res.status(500).json({});
		return res.status(200).json({});
	});
})

const args = minimist(process.argv.slice(2));
const PORT = args.port || 6000;

app.listen(PORT, () => {
  console.log('backend server listening to port:' + PORT);
})