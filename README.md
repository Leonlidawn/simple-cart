Proof-of-concept Shopping Cart
===

Features:
---
- data of product items provided in `products.json` 
- session is used for cart
- each submitted order is stored in `order` folder in backend as a json file with unique file name.

Tech:
---
- react (react hooks)
- nodejs
- express

Environment: 
---
node: v14.3.0



Running frontend server:
---
Frontend is initialized by Create-React-App, to run the server, you can either use ```npm start``` run a dev server or run server.js in src folder to serve static files from build folder.

Both require node modules to be installed:

 - install modules (in projects's root directory)
	```
	npm install
	```

 After the modules are installed
- you can start the a dev server by using react-scripts.
	(configs are in env.development and env.production )
	```
	npm start
	```
	or
- serve static files from build folder:
	- first build files
		```
		npm build
		```
	- start the server located in src folder:
		- default port is 80, provide port for alternative.
		- eg. run on port 4000:
		```
		PORT=4000 node src/server.js
		``` 


Running backend server:
---
Backend codes are inside backend folder under project's root directory. It is a simple server written in nodejs with express.
To start the server:
- change directory to backend folder from project directory.
	```
	cd ./backend
	```
- install node modules
	```
	npn install
	```
- run server:
	- default port is 6000, provide port for alternative
	- eg. run on port 4000
	```
	node server.js --port=4000
	```
