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

Please follow the steps below to run the project.

Running frontend server:
---
in projects's root directory:
 - install modules:
	```
	npm install
	```

- build:
	```
	npm build
	```

- run server:
	- default port is 80, provide port for alternative.
	- eg. run on port 4000:
	```
	node server.js --port=4000
	``` 

Running backend server:
---
backend code locates at backend folder under project's root directory

- change directory to backend folder
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
