# Writing servers with Node.js

## Weekly Survey
**Any missing emails?**

* (candid feedback will be filtered via Jordana)
* Feeling overwhelmed
    * Most students feel that way after week 1
    * Summit is week 2/week 3 
    * Volume of work
        * Prioritize:
            * labs
            * contextual readings
            * long reads
* visibility issues 
    1. stylus tablet in lieu of whiteboard
    2. second screen
* more context
    * lectures
    * labs
* more time to read code being presented
* groups/pairings

## Misc
* only PR *once* on github for pair/mob labs
* everyone submits on canvas 

## Roadmap

* Last Week: JavaScript and Node Fundamentals
* This Week: Server Fundamentals with Node
* Next Week: Middleware (Express.js) and Data (MongoDB)

## Today's Learning Objectives

1. Write and run and TCP server with Node.js
2. Create event publishers using EventEmitter.
3. Subscribe to an event publisher via function handlers.
4. Write and run a basic hello world HTTP server with Node.js

## Tomorrow's Learning Objectives

1. Create TCP and HTTP clients using Node.js
2. Differentiate HTTP requests based on path (url) and verb (http) and other request factors
3. E2E servers using Mocha (and chai-http for HTTP)

## Labs

There are two labs today, and follow-ons to both labs tomorrow:

* [TCP Chat Server](https://github.com/codefellows-portland-javascript-401d4/tcp-chat-server)
* [HTTP Hello/Goodbye World](https://github.com/codefellows-portland-javascript-401d4/http-hello-goodbye-world)

### Application Architecture
* Client _(browser, mobile, IoT)_
* Server _(Node.js)_
* Database _(MongoDB)_

### Layers
* [OSI vs TCP/IP Model](http://www.tcpipguide.com/free/diagrams/tcpiplayers.png)
* [OSI Model](http://blog.buildingautomationmonthly.com/wp-content/uploads/2013/05/OSI-Model.png)

### Overview
* TCP long-lived streams over sockets
* server
    * event emitter
    * emits client sockets
        * duplex streams
        * event emitter
            * `on`: `data` and `close`
        * `write`
    * call `listen` to start listening
* event emitter pattern
	* How would we implement a publisher?
	* subscribe and use an event emitter
    * streams as event emitters

