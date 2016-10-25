![cf](http://i.imgur.com/7v5ASc8.png) Node Clients and Http
===

## Today's Learning Objectives

1. Create TCP and HTTP clients using Node.js
2. Differentiate HTTP requests based on path (url) and verb (http) and other request factors
3. E2E servers using Mocha (and chai-http for HTTP)
4. (Time permitting) Implement EE

## Labs

(Some people have submitted to wrong canvas assignment)

Part 2 on both labs (`LAB2.md`):

* [TCP Chat Server](https://github.com/codefellows-portland-javascript-401d4/tcp-chat-server)
* [HTTP Hello/Goodbye World](https://github.com/codefellows-portland-javascript-401d4/http-hello-goodbye-world)

### Node Clients



### E2E Testing Servers

* Using "real" clients for end-to-end (E2E) Testing
* Focus on golden path, defer to unit tests for more refined functionality 
* use setup and teardown
* Node Clients
	* TCP (node built-in module)
	* HTTP (node built-in module)
	* Request Libraries (request, superagent, etc)
	* Chai HTTP (SuperAgent)
* HTTP

### E2E Testing TCP


### HTTP

* [ Http Protocol explained ](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* Url
	* [parts of url](http://bl.ocks.org/abernier/3070589)
	* protocol
	* hostname ( host + port )
	* resource path
	* query
* Verbs: 
	* GET, POST, PUT, DELETE, PATCH
	* plus more ...
* REST
	* [understanding REST](https://spring.io/understanding/REST)
	* Resources (nouns!)
	* Part “art”
* Headers
	* Status codes
	* Entity Description
		* Content type, etc.
	* Authorization tokens

REST use cases:
* `GET /todos` = return the list of todos (Read)
* `GET /todos/:id` (example: `/todos/123`) = return specific todo,
often used for a detail view (Read)
* `POST /todos` = create a new todo (and return object with id) (Create)
* `PUT /todos/:id` = create or replace todo with this specific id (Update)
* `PATCH /todos/:id` = update the supplied properties on the todo with specific id (Update)
* `DELETE /todos/:id` = delete the specified todo (Delete)

HTTP status codes:
* 200 OK
* 300 (about the resource, hasn't changed, redirect here)
* 400 user did something wrong
* 500 something went wrong on our server