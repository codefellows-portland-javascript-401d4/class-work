![cf](http://i.imgur.com/7v5ASc8.png) Functions, Asynchronicity, File System (fs)

## In-class exercise

Create a "standard" project:
* GitHub repo
* npm package
* build scripts (lint, test, watch)
* .eslintrc, .gitignore

That's a tested fizz-buzz module:
* takes an integer `n`
* returns array of length `n` 
    * numbers in sequence up to `n`
    * divisible by 3? `fizz`
    * divisible by 5? `buzz`
    * both? `fizz buzz`
* example test assertion:
    ```
    assert.deepEqual(fizzBuzz(16), [
        1, 
        2, 
        'fizz',     // 3
        4, 
        'buzz',     // 5
        'fizz',     // 6
        7, 
        8, 
        'fizz',     // 9
        'buzz',     // 10
        11,
        'fizz',     // 12
        13,
        14,
        'fizzbuzz', // 15
        16
    ]);

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
    * arrow function
* [Three function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md) 
* Review node event loop
* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback( err, result )`
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
