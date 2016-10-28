![cf](http://i.imgur.com/7v5ASc8.png) Functions. Stacks and Queues
===

## Labs
* Behind on labs and readings?
	* Prioritize `http single resource`  
	* By Sunday, stop on work on all unfinished labs and be ready to move forward
* MongoDB reading and install moved to Tuesday morning

## Today's Learning Objectives

1. functions - `this` and `bind`, `call`, `apply`
2. Stacks and Queues
3. More Whiteboarding!

## Agenda

* function context
	* `this`
	* `call`, `apply`, `bind`
	* arrow functions are context-less
* DS&A
	* Review Whiteboarding Best Practices
	* Warm-up!
	* Stacks & Queues

## Problem 1:

write a function to determine if a string is a palindrome

*do not use array.reverse!!!*

const noSpaces = str.toLowerCase().replace(' ', '');

input | output
---|---
racecar | true
what | false
noon | true
not a palindrome | false
taco cat | true

## Problem 2:

write a function for determining if a string has matching parentheses

input | output
---|---
`( this is matched )` | true
`( this is not matched (` | false
`( this ( is ) ( matched ))` | true
`( this ( is word ))` | true
`) this ( is word )(` | false
`( this ( is( matched )))` | true
`this ( is ( matched ))` | true
`( this ( is not matched )))` | false
`)` | false
`(` | false