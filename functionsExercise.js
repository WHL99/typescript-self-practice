// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
function twoFer(name1, name2) {
    if (name1 === void 0) { name1 = 'you'; }
    if (name2 === void 0) { name2 = 'me'; }
    return "One for " + "".concat(name1) + ", one for " + "".concat(name2);
}
console.log(twoFer('Wen', 'Dog'));
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
function isLeapyear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
isLeapyear(2013);