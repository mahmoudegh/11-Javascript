/*jslint plusplus: true, evil: true*/
/*global console, alert, document, prompt*/

/*
    Regular Expression Syntax:
    ==========================

    /pattern/attributes



    Uses:
    =====

    Search | Replace | Match | Split | Test


    Attributes List:
    ================

    [i] => Case Insensetive
    [g] => Global Search
    [m] => Multi Line Search


    Brackets Use:
    =============

    [...] => Character
    [^...] => Not Character
    [a-z] => Range Small Letters
    [A-Z] => Range Capital Letters
    [0-9] => Range Numbers
    [^0-9] => Not Range
    [A-g] => Range[A-Z], Range[a-g]
    [0-9a-z] => Double Range
*/

var string = "1234567890ABCDEFGHIJKabcdefghijk",

    result = string.replace(/[0-9a-z]/g, "@");

console.log(result);




































































































// ////////////////////////////////////////////////////////////////Height
