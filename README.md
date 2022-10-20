# Visual Nuts Javascript test

This project contains the solution of two proposed tests by Visual Nuts.

## Installation

Use the package manager npm to install the DEV dependencies.
Jest and Babel.

```bash
npm install
```

## Check the results
To check the results of both exercises run: 
```bash
npm start
```
To Run unit tests: 
```bash
npm test
```
## Decisions 
* Jest was choosen for the unit tests because it's simple a very solid library for tests

## Solution of exercise 1

### I decided to use a recursive approach that gives me a function runtime complexity O(n).
 * This function receive two parameters to indicate the range required since initial value is greather than 0.
 * If negative numbers be required in the future, remove the first input validation.
 * With a valid input, the function will call themselve with initial value increased until reach the final indicated value.
 * Unit tests in exercise-02.test.js

 ## Solution of exercise 2

### I decided to create a Class for Country, with that, it's easier to test and segregate the responsability of geting the json to who is implementing the class.

 * The requested functions are methods of the class Country.
 * The Country class has 2 private methods that create 2 Data Structures that was fundamental to keep the other methods cleaner and abstracted of the type of data. In an evolution, a layer of adapter can be created to support different data from different consumers.
 * The private mathods, are responsible to abstract the countries and the languages,it makes easy to work in the core of the functions, applying single responsabilities for the functions.