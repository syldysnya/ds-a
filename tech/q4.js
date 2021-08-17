`-It was titled "Escape Room Keys". You're given an array of real words and also an array of 7-letter strings. For each 7-letter string, return how many possibilities you can make from the array of real words. The only catch was that the first letter of the 7-letter string must be included in the final word. The array of real words scaled upwards to lengths of 5, 100, 500, 1000, and 10000.

-Implement a function spellingBeeSolutions(wordlist, puzzles), Time limit: 75 minutes.

input:
wordlist: an array of strings that are "valid" words
puzzles: an array of strings. Each string is a puzzle

output: an array of integers. Each integer should be the number of "valid" words in the corresponding puzzle.

example:
input: wordlist: ['APPLE', 'PLEAS', 'PLEASE']; puzzles: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']
expected output: [0, 1, 3, 2, 0]

-they asked given an array of strings find out how many words in the word list (2nd array) that all the letters in the first string can be used to create it. 

-Use a array of puzzles to find out how many words can be solved with each puzzle return that in an array.`