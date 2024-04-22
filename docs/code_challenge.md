# Localyze


### Coding challenge 
This is our coding challenge, aimed at getting to know you and your code skills a bit better.
There's no time limit on the challenge, but we expect you to invest just a couple of hours of your day.
Most of all, we hope you have fun working on this, show off your skills!

### What is expected of you?
Choose at least one of the following challenges and using Ruby or Javascript send us the solution to the challenge, ideally hosted on Github or Gitlab.

There is no requirement in using a specific framework or tooling, so it’s up to you to use whatever you find yourself comfortable with. Tests are welcome too. 

Please remember to add some documentation explaining how to use your solution.


### Challenge 1
Given a word, write an algorithm that returns the sequence of a specific character that appears the most in sequence. If there are many of them, return the first character.

Examples

Given the input `"Pressuuuuuure"` the output is `"uuuuuu"`

Given the input `"Boat"` the output is `"B"`

Given the input <code>"A hot&#160;&#160;dog"</code> the output is <code>"&#160;&#160;"</code> (2 spaces!)

### Challenge 2
Given a set of numbers, find the subset in which the sum of the elements is the maximum sum.

Example

Given the set of elements
`[2, -4, 6, 8, -10, 100, -6, 5]`

The maximum sum subset is:
`[2, -4,`**`6, 8, -10, 100`**`, -6, 5]`

Thus, the program must return the position of the first and last element of the subset.
In this example, the positions 2 and 5, considering the first position with index 0.

### Challenge 3
Given a string `s` consists of some words separated by some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
 
Example 1

Given the input `s = "Hello World"` the output is 5

Example 2

Given the input <code> s = "   fly me&#160;&#160;&#160;to&#160;&#160;&#160;the moon&#160;&#160;" </code> the output is 4

Example 3

Given the input `s = "luffy is still joyboy"` the output is 6
 
Constraints
* `1 <= s.length <= 104`
* s consists of only English letters and spaces ' '.
* There will be at least one word in s.
