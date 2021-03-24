/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

/*
    Regular Expression Syntax:
    ==========================

    /pattern/attributes

////////////////////////////////////////////////////////////////////////////////

    Regular Expression Uses:
    ========================

    Search | Replace | Match | Split | Test

////////////////////////////////////////////////////////////////////////////////

    Regular Expression Attributes List:
    ===================================

    [i] => Case Insensetive
    [g] => Global Search
    [m] => Multi Line Search

////////////////////////////////////////////////////////////////////////////////

    Regular Expression Brackets Use:
    ================================

    [...] => Character
    [^...] => Not Character
    [a-z] => Range Small Letters
    [A-Z] => Range Capital Letters
    [0-9] => Range Numbers
    [^0-9] => Not Range
    [A-g] => Range[A-Z], Range[a-g]
    [0-9a-z] => Double Range

////////////////////////////////////////////////////////////////////////////////

    Regular Expression Quantifiers:
    ===============================

    Letter+ =>Any Word Contain One  Or More Of The Same Letter Replaced As One
    Letter{Number} => Word Contain Number Of Letter
    Letter{Number, Number} => Word Contain Number Or Letter
    Letter{Number,} => Word Contain At Least Number
*/

var string = "I Love Elzero Web School",

    result = string.replace(/e{2,}/gi, "@");

console.log(result);




































































































// ////////////////////////////////////////////////////////////////Height
