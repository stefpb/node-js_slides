
node.js
=======

 * Javascript on Server

 * V8 Chrome Javascript Engine

 * |Netzwerkverbindungen|>>

 * ereignisgesteuert: Non-Blocking-I/O

	* 1 Thread @Eventloop

	* nicht CPU-belastende Aufgaben werden ausgelagert: Datei-, Datenbank-,
		Webservicezugriffe

nextslide

node.js: Eventdriven
====================
```javascript
setTimeout(function () {
	console.log("world");
}, 2000);

console.log("hello");
```

PHP:

```php
echo "hello";
sleep(2);      // stop: thread blocked
echo "world"
```

http://misclassblog.com/wp-content/uploads/2013/04/event-loop.jpg (src: Jeff Kunkle)

<!-- Javascript stoppt nie, schläft nie, im "idle", wenn nichts zu tun -->

nextslide

node.js: Non-Blocking-I/O
=========================
```javascript
var fs = require('fs');
var data;

fs.readFile('hallo.txt', function (err, data) {
	console.log(data);
});

console.log(data); //undefined
```

<!-- Process/Thread schläft bzw. bearbeitet andere Anfragen,
bis Datei eingelesen ist
Problem: Debugging, kleine Stacktraces (Eintrittspunkte unsichtbar), CPU Intensive Aufgaben blockieren 
-->

nextslide

node.js: Einfacher HTTP-Server
==============================


```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hallo Welt');
  res.end();
}).listen(8000);
```

<!-- Eingebauter Webserver, kein Apache notwendig -->

nextslide

node.js: Callbacks im HTTP-Server
=================================

Weitere Aufrufe innerhalb des Callbacks, müssen selber Callbacks entgegennehmen
und diese am Ende (statt return) aufrufen:

```javascript
var http = require('http');
var leseDatei = require('./leseDatei');

http.createServer(function (req, res) {
	leseDatei(function (err, data) {
		if (err) {
			return res.end("Fehler: " + err);
		}
  		res.end(data);
	});
}).listen(8000);

// leseDatei.js
var fs = require('fs');
module.export = function (cb) {
	fs.readFile('hallo.txt', function(err, data) {
		cb(err.message, data);
	});
}

```


nextslide

node package manager: **npm**
===========================

 * npm @node.js 0.6.3

 * ~40000 Packages

 * underscore, async, express, optimist, coffee-script, uglyfy-js,  
  	 socket.io, less, grunt, mocha, browserify, passport, eventemitter2,  
  	 nodemon, node-inspector, [db-provider], [template-engine]

 * npm install [package] -g     (globale Installation)

 * npm install [package] --save (Projektinstallation @package.json)

 * npm install (installiert alle Pakete aus package.json)

 * npm update

<!--
	db-provider: mongodb, mysql, couchdb
	template-engine: mustache, ejs, jade
	express: sinatra (ruby)
	socket.io: real-time networking (websockets oder longpolling fallback)
-->

nextslide

node.js: express.js
===================

 * sudo npm install express -g
 * express -h
 * express --ejs --css less sampleapp
 * cd sampleapp
 * npm install
 * node app.js

nextslide



nextslide

node.js: Process Manager pm2
==

 * Logging, Restart on Crash, Clustering, Monitoring, Cron, Hot Code Reload

 * sudo npm install pm2 -g
 * pm2 start app.js
 * pm2 stopAll

nextslide


node.js Danke für die Aufmerksamkeit!
=====
Fragen?

Folien und Code auf http://github.com/stefpb

Quellen:

 * http://www.youtube.com/watch?v=jo_B4LTHi3I (Ryan Dahl)
 * http://www.youtube.com/watch?v=L0pjVcIsU6A (Jeff Kunkle)
 * http://en.wikipedia.org/wiki/Nodejs


nextslide