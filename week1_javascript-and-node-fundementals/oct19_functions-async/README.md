![cf](http://i.imgur.com/7v5ASc8.png) Functions, Asynchronicity, File System (fs)

## npm modules
* anyone find something interesting?

## In-class exercise

https://github.com/codefellows-portland-javascript-401d4/fizz-buzz

## Learning Objectives

* Asynchronous programming using Node.js callback pattern
* Write asynchronous tests using the Mocha `done` parameter/argument
* Basic Filesystem I/O using fs built-in Node.js module
* Understand the difference between an in-memory object and its 
serialized representation and be able to move between the two formats by using:
	* JavaScript JSON to stringify and parse objects to strings
	* “encodings” with binary data to string format
* Read, write, and manipulate encoded binary data using the Buffer class

## Agenda

* Types of Functions
    * function definition
    * function expression
    * (named function)
    * [arrows functions](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/fat-arrows.md)
* [Three function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md) 
* Async pattern can use:
    * callbacks
    * promises
    * async/await ([ES2017](https://github.com/tc39/proposals/blob/master/finished-proposals.md))
* Review node event loop
* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback( err, result )`
* Some hardfast rules:
    1. You can't create asynchronicity with just js
    2. If your building functionality ontop of asychronous API's, 
    then your library must be asynchronous!
* Demo
	* Mocha `done`
		* test parameter
		* Tests function.length
		* if > 0, test is async
		* calling done with any non-null argument is failure (matches node callback signature)
	* and node `fs` module
	* Test drive "get files from directory"
* Orchestration?
	* Sequential
	* Parallel
		* Async order is "completion" based

# moved to tomorrow
* Binary Data
	* What is meaning?
	* Bits, Bytes, Words, DWords
	* Endianness
	* "encoding"
	* "serialization"
	* Meet `Buffer`
		* Data managed outside of JavaScript
		* Binary representation
		* Stored in Heap memory
		* Buffers access this memory
		* I/O methods
		* Beware of the number constructor
