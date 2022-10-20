


import visualNuts from './exercise-01/exercise-01.js'
import Country from '././exercise-02/country.js';

/** EXERCISE 1 
Write or describe an algorithm that prints the whole integer numbers to the console, 
start from the number 1, and print all numbers going up to the number 100.
However, when the number is divisible by 3, do not print the number, but print the word 'Visual'. 
If the number is divisible by 5, do not print the number, but print 'Nuts'. 
And for all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. 
(Maybe we would want to print the first 500 numbers, ...).
*/


console.log('------ Exercise 1 START ------')
console.log(visualNuts(1,100))
console.log('------ Exercise 1 END ------')

/** EXERCISE 2
 *  Given a Json Of Countries, Create the following functions:
 *  1 - returns the number of countries in the world
 *  2 - finds the country with the most official languages, where they officially speak German(de). 
 *  3 - that counts all the official languages spoken in the listed countries. 
 *  4 - to find the country with the highest number of official languages.
 *  5 - to find the most common official language(s), of all countries.
 */

import fs from 'fs'

const countries = fs.readFileSync('./countries.json');
const countriesList = JSON.parse(countries);

const country = new Country(countriesList);

console.log('------ Requested Function 1 START ------')
console.log(`The total number of countries in the worls is 195`)
console.log(`The total number of countries provided in the JSON is ${country.numberOfCountriesInTheWorld(countriesList)}`)
console.log('------Requested Function 1 END ------')


console.log('------ Requested Function 2 START ------')
console.log(`Countries thats Speaks German with higher number of languages spoken is ${country.countryWithMostOfficialLanguagesThatSpeaksDE(countriesList)}`)
console.log('------Requested Function 2 END ------')


console.log('------ Requested Function 3 START ------');
console.log(`The total of official languages is ${country.numberOfOfficialLanguages(countriesList)}`);
console.log('------Requested Function 3 END ------');


console.log('------ Requested Function 4 START ------');
console.log(`The country with more official languages is ${country.countryWithMoreOfficialLanguages(countriesList)}`);
console.log('------Requested Function 4 END ------');


console.log('------ Requested Function 5 START ------');
console.log(`The language spoken in more countries is ${country.languageSpokenInMoreCountries(countriesList)}`)
console.log('------ Requested Function 5 END ------');